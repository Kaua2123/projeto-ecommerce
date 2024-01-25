import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
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
          <p className="seller">Vendedor</p>
          <p>Nome vendedor</p>
          <p>Quantidade</p>
          <p>
            {product.stock_quantity}
            {' '}
            <b> em estoque</b>
            {' '}
            <b />
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
