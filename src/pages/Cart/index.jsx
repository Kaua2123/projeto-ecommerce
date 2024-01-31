import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Header from '../../components/Header';
import CartProduct from '../../components/CartProduct';
import axios from '../../services/axios';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [{ price }] = cartItems;
  const [{ product_quantity }] = cartItems;

  console.log(price, product_quantity);

  const subtotalCalculator = () => {
    const firstAmount = cartItems.map((value) => (
      value.product_quantity * value.price
    ));
    const lastAmount = firstAmount.reduce((acumulator, actualValue) => (
      acumulator + actualValue
    ));
    return lastAmount.toFixed(2);
  };

  const subtotal = subtotalCalculator();

  const createRequest = async () => {
    await axios.post('/request/store', { total_price: subtotal, payment_method: 'Pix' })
      .then((response) => {
        console.log(response.data);
        toast.success('Seu pedido foi criado. Para finalizar a compra, acesse a página Pedidos');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Ocorreu um erro ao criar um pedido');
      });
  };

  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Carrinho</h2>

        <div className="cart-container">
          {cartItems.map((value, index) => (
            <CartProduct
              key={value.id}
              id={value.id}
              name={value.name}
              price={value.price}
              photo={value.photo}
              productQuantity={value.product_quantity}
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
                {subtotal}
                {' '}
                R$
                {' '}
              </p>
            </div>
          </div>
          <button className="brown-btn" type="button" onClick={createRequest}>Criar pedido</button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
