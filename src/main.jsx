import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import './styles/pages/Home/home.css';
import './styles/pages/SignUp/signUp.css';
import './styles/pages/Products/products.css';
import './styles/pages/MyProducts/myProducts.css';
import './styles/pages/Product/product.css';
import './styles/pages/Cart/cart.css';
import './styles/pages/UpdateUser/updateUser.css';

import './styles/components/CardProduct/cardProduct.css';
import './styles/components/CardSellProduct/cardSellProduct.css';
import './styles/components/CardUser/cardUser.css';
import './styles/components/CartProduct/cartProduct.css';
import './styles/components/Header/header.css';
import './styles/components/DropdownMenu/dropdownMenu.css';

import Home from './pages/Home';
import Products from './pages/Products';
import MyProducts from './pages/MyProducts';
import Product from './pages/Product';
import Requests from './pages/Requests';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import UpdateUser from './pages/UpdateUser';

import store from './store/index';
import ToastProvider from './components/ToastProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/myProducts" element={<MyProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/chart" element={<Cart />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/updateUser" element={<UpdateUser />} />
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
