import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import productImg from '../../imgs/product.svg';
import Header from '../../components/Header';
import axios from '../../services/axios';
import CardSellProduct from '../../components/CardSellProduct';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    async function getProduct() {
      await axios.get(`/product/${id}`)
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
          setPhoto(response.data.Image.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProduct();
  }, []);

  return (
    <div>
      <Header />
      <div className="main-grid">

        <div className="img-content">
          {photo ? (
            <img src={photo} alt="" />
          ) : (
            <img src={productImg} alt="" />
          )}

        </div>

        <div className="text-section">
          <h2>{product.name}</h2>
          <h3>Mais vendidos</h3>
          <h1 className="product-price">
            {product.price}
            {' '}
            R$
          </h1>
        </div>

        <div className="sell-data-container">
          <h3><CardSellProduct /></h3>
        </div>
      </div>
    </div>
  );
}

export default Product;
