import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import productImg from '../../imgs/product.svg';
import * as actions from '../../store/modules/cart/actions';

export default function CartProduct({ name, price, photo }) {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  // const stockQuantity = useSelector((state) => state.cart.product.stock_quantity);
  const removeFromCart = () => {
    console.log('removeFromCart called');

    try {
      dispatch(actions.removeFromCart({}));
      toast.success('Item removido do carrinho.');
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao remover o item do carrinho.');
    }
  };

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
            <button className="btn-trash" type="button" onClick={removeFromCart}><FaTrash size={16} /></button>
          </div>

        </div>

      </div>
    </div>
  );
}

CartProduct.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
