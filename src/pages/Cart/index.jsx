import React from 'react';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';

function Chart() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Carrinho</h2>

        <div className="cart-container">
          <CartProduct />
        </div>

      </div>
      <div className="subtotal-container">
        <div>
          <div className="payment-data">
            <div>
              <h4 style={{ color: 'var(--light-brown-color)' }}>Subtotal</h4>
            </div>
            <div>
              <p> subtotal </p>
            </div>
          </div>
          <button className="brown-btn" type="button">Criar pedido</button>
        </div>

      </div>
    </div>
  );
}

export default Chart;
