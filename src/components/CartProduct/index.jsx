import React, { useState } from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import productImg from '../../imgs/product.svg';

export default function ChartProduct() {
  const name = useSelector((state) => state.cart.product.name);
  const price = useSelector((state) => state.cart.product.price);
  const photo = useSelector((state) => state.cart.product.productPhoto);
  const [productQuantity, setProductQuantity] = useState(1);
  // const stockQuantity = useSelector((state) => state.cart.product.stock_quantity);

  return (
    <div>
      <div className="cart-grid">
        <div className="img-container">
          {photo ? (
            <img src={photo} alt="" style={{ width: '100%', height: '100%' }} />
          ) : (
            <img src={productImg} alt="" style={{ width: '100%', height: '100%' }} />
          )}

        </div>
        <div className="data-container">
          <p>{name}</p>
          <p>
            {price}
            {' '}
            R$
          </p>
          <p>
            Quantidade:
            {' '}
            {productQuantity}
          </p>
          <div className="buttons-cart">

            <button
              className="btn-cart"
              type="button"
              onClick={() => {
                setProductQuantity(productQuantity + 1);
                console.log(productQuantity);
              }}
            >
              <AiOutlinePlus size={24} />
            </button>
            <button
              className="btn-cart"
              type="button"
              onClick={() => {
                setProductQuantity(productQuantity - 1);
                console.log(productQuantity);
              }}
            >
              <AiOutlineMinus size={24} />
            </button>
            <button className="btn-trash" type="button"><FaTrash size={16} /></button>
          </div>

        </div>

      </div>
    </div>
  );
}
