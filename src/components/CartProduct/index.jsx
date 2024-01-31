import React from 'react';
import PropTypes from 'prop-types';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import productImg from '../../imgs/product.svg';
import * as actions from '../../store/modules/cart/actions';

export default function CartProduct({
  id, name, price, photo, index, productQuantity,
}) {
  const dispatch = useDispatch();
  // const stockQuantity = useSelector((state) => state.cart.product.stock_quantity);
  console.log(productQuantity);
  const removeFromCart = () => {
    try {
      dispatch(actions.removeFromCart({ index }));
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao remover o item do carrinho.');
    }
  };

  const increaseProductQuantity = () => {
    try {
      dispatch(actions.increaseProductQuantity({ id }));
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao aumentar a quantidade do item.');
    }
  };

  const decreaseProductQuantity = () => {
    try {
      dispatch(actions.decreaseProductQuantity({ id }));
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
            { ' '}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
};
