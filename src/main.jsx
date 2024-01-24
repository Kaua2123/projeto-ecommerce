import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './styles/pages/Home/home.css';
import './styles/pages/SignUp/signUp.css';
import './styles/pages/Products/products.css';
import './styles/pages/Product/product.css';
import './styles/pages/Users/users.css';
import './styles/pages/Chart/chart.css';
import './styles/pages/UpdateUser/updateUser.css';

import './styles/components/CardProduct/cardProduct.css';
import './styles/components/CardUser/cardUser.css';
import './styles/components/ChartProduct/chartProduct.css';
import './styles/components/Header/header.css';
import './styles/components/DropdownMenu/dropdownMenu.css';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Requests from './pages/Requests';
import Users from './pages/Users';
import Chart from './pages/Chart';
import SignUp from './pages/SignUp';
import UpdateUser from './pages/UpdateUser';

import ToastProvider from './components/ToastProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/users" element={<Users />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/updateUser" element={<UpdateUser />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
