import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { jwtDecode } from 'jwt-decode';

import Header from '../../components/Header';
import Product from '../../imgs/product.svg';
import Search from '../../imgs/search.svg';
import Carousel from '../../components/Carousel';
import axios from '../../services/axios';

function Products() {
  const [textFilter, setTextFilter] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');

  const [productDescription, setProductDescription] = useState('');

  useEffect(() => {
    async function getProducts() {
      await axios.get('/product')
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProducts();
  }, []);

  const filterProducts = () => {
    const productsFilter = products.filter((product) => {
      if (product.name.toLowerCase().includes(textFilter)) {
        setFilteredProducts(product);
        return product;
      }
    });
    console.log(productsFilter);
    setFilteredProducts(productsFilter);
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const decodedToken = jwtDecode(token);
    e.preventDefault();
    try {
      if (!productName || !productPrice || !productStock || !productDescription) {
        toast.error('Todos os campos devem ser preenchidos.');
        return;
      }

      if (productName.length < 3) {
        toast.error('O nome do produto deve ter entre 3 ou 24 caracteres.');
      }

      if (productDescription.length < 3) {
        toast.error('A descrição do produto deve ter entre 3 ou 24 caracteres.');
      }

      if (!validator.isInt(productStock)) {
        toast.error('Por favor, preencha o campo de estoque corretamente. Apenas números são aceitos');
      }
      if (!validator.isFloat(productPrice)) {
        toast.error('Por favor, preencha o campo de preço corretamente. Apenas números são aceitos');
      }

      await axios.post('/product/store', {
        name: productName,
        price: productPrice,
        stock_quantity: productStock,
        description: productDescription,
        user_id: decodedToken.id,
      })
        .then((response) => {
          console.log(response.data);

          toast.success('Seu produto foi colocado à venda.');
        })
        .catch((error) => {
          console.log(error);

          toast.error('Ocorreu um erro ao pôr seu produto à venda.');
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <section className="minor-section">
        <div className="search-container">
          <div className="grid-search">
            <div className="search-text-container">
              <div className="text-search">
                <h2>Busque e encontraremos produtos pra você.</h2>
              </div>
            </div>
            <div className="icon-input-container">
              <img className="img-search" src={Search} alt="" />
              <input
                type="text"
                placeholder="Nome do produto..."
                onChange={(e) => {
                  setTextFilter(e.target.value.toLowerCase());
                }}
              />
              <button
                type="button"
                className="white-btn"
                onClick={(e) => {
                  filterProducts();
                }}
              >
                Filtrar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="most-buyed-container main-content">
          <h2>Produtos</h2>
          {filteredProducts.length > 0 ? (
            <Carousel products={filteredProducts} />
          ) : (
            <Carousel products={products} />
          )}

        </div>
      </section>
      <section className="minor-section">
        <div className="sell-products">
          <h2>Venda de produtos</h2>
          <div className="sell-products-grid">
            <div className="sell-products-image-container">
              <img src={Product} alt="" />
            </div>
            <div className="sell-products-inputs">
              <label className="label-flex" htmlFor="">Nome</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductName(e.target.value);
                  console.log(productName);
                }}
              />
              <label className="label-flex" htmlFor="">Preço</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductPrice(e.target.value);
                }}
              />
              <label className="label-flex" htmlFor="">Estoque</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductStock(e.target.value);
                }}
              />
              <label className="label-flex" htmlFor="">Descrição</label>
              <input
                type="text"
                onChange={(e) => {
                  setProductDescription(e.target.value);
                  console.log(productDescription);
                }}
              />
              <button
                type="submit"
                className="brown-btn"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Pôr à venda
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
