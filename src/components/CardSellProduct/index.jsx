/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/cart/actions';

import axios from '../../services/axios';

export default function CardSellProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productPhoto, setProductPhoto] = useState('');

  useEffect(() => {
    async function getProduct() {
      await axios.get(`/product/${id}`)
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
          setProductPhoto(response.data.Image.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProduct();
  }, []);

  const addItemToCart = () => {
    const {
      name, price, stock_quantity, product_quantity,
    } = product;
    try {
      dispatch(actions.addToCart({
        id, name, price, stock_quantity, product_quantity, productPhoto,
      }));
      toast.success('Item adicionado ao carrinho');
    } catch (error) {
      toast.error('Ocorreu um erro ao adicionar o item ao carrinho');
    }
  };

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
          <button type="button" className="white-btn" onClick={addItemToCart}>
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
