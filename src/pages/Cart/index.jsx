import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';

function Cart() {
  const price = useSelector((state) => state.cart.product.price);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Carrinho</h2>

        <div className="cart-container">
          {cartItems.map((value, index) => (
            <CartProduct
              key={value.id}
              name={value.name}
              price={value.price}
              photo={value.photo}
              index={index}
            />
          ))}

        </div>

      </div>
      <div className="subtotal-container">
        <div>
          <div className="payment-data">
            <div>
              <h4 style={{ color: 'var(--light-brown-color)' }}>Subtotal</h4>
            </div>
            <div>
              <p>
                {' '}
                {price}
                {' '}
                R$
                {' '}
              </p>
            </div>
          </div>
          <button className="brown-btn" type="button">Criar pedido</button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
