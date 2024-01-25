import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Header from '../../components/Header';

import Search from '../../imgs/search.svg';

import Carousel from '../../components/Carousel';
import axios from '../../services/axios';

function Products() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/product/store', {
        name: productName,
        price: productPrice,
        stock_quantity: productStock,
        description: productDescription,
      })
        .then((response) => {
          console.log(response.data);
          toast.success('Seu produto foi colocado à venda.');
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data);
        });
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao colocar seu produto à venda.');
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    const photoURL = URL.createObjectURL(file);
    setProductImage(photoURL);
  };

  return (
    <div>
      <Header />
      <section className="minor-section">
        <div className="search-container">
          <div className="grid-search">
            <div className="search-text-container">
              <div className="text-search"><h2>Busque e encontraremos produtos pra você.</h2></div>
            </div>
            <div className="icon-input-container">
              <img className="img-search" src={Search} alt="" />
              <input type="text" placeholder="Produto..." />
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="most-buyed-container main-content">
          <h2>Produtos</h2>

          <Carousel />

        </div>
      </section>
      <section className="minor-section">
        <div className="sell-products">
          <h2>Venda de produtos</h2>
          <div className="sell-products-grid">
            <div className="sell-products-image-container">
              {productImage ? (
                <img src={productImage} alt="" />
              ) : (
                <img src={Search} alt="" />
              )}

              <div className="camera">
                <label htmlFor="picture-input">
                  <FaCamera className="icon-camera" color="black" size={40} cursor="pointer" />
                  <input
                    type="file"
                    name=""
                    id="picture-input"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </label>
              </div>
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
