import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';

import Search from '../../imgs/search.svg';
import axios from '../../services/axios';

export default function CardSellProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      await axios.get(`/product/${id}`)
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProduct();
  }, []);

  return (
    <div>
      <div className="card-sell-product">
        <div className="sell-text-section">
          <p>Vendedor:</p>
          <p>Nome vendedor</p>
          <p>Quatnidade:</p>
          <p>
            {product.stock_quantity}
            {' '}
            <b>em estoque</b>
          </p>
          <p>Valor do frete:</p>
          <p>Frete grátis</p>
        </div>

        <div className="sell-buttons-container">
          <button type="button" className="white-btn">
            Adicionar ao carrinho
          </button>
          <button type="button" className="white-btn">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
