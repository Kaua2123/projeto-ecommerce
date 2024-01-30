import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import productImg from '../../imgs/product.svg';
import * as actions from '../../store/modules/cart/actions';

export default function CartProduct({
  name, price, photo, index,
}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  let productQuantity = useSelector((state) => state.cart.productQuantity);
  // const stockQuantity = useSelector((state) => state.cart.product.stock_quantity);
  const removeFromCart = () => {
    try {
      dispatch(actions.removeFromCart({ index }));
      toast.success('Item removido do carrinho.');
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao remover o item do carrinho.');
    }
  };

  const increaseProductQuantity = () => {
    if (productQuantity === 0) {
      setQuantity(quantity + 1);
    } else {
      productQuantity += 1;
    }

    try {
      if (productQuantity === 0) {
        dispatch(actions.increaseProductQuantity(quantity));
      } else {
        dispatch(actions.increaseProductQuantity(productQuantity));
      }
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao aumentar a quantidade do item.');
    }
  };

  const decreaseProductQuantity = () => {
    if (productQuantity === 0) {
      setQuantity(quantity - 1);
    } else {
      productQuantity -= 1;
    }
    try {
      if (productQuantity === 0) {
        dispatch(actions.decreaseProductQuantity(quantity));
      } else {
        dispatch(actions.decreaseProductQuantity(productQuantity));
      }
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao diminuir a quantidade do item.');
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
              onClick={increaseProductQuantity}
            >
              <AiOutlinePlus size={24} />
            </button>
            <button
              className="btn-cart"
              type="button"
              onClick={decreaseProductQuantity}
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
  index: PropTypes.number.isRequired,
};
