import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './styles/pages/Home/home.css';
import './styles/pages/SignUp/signUp.css';
import './styles/pages/Products/products.css';
import './styles/pages/Users/users.css';
import './styles/pages/Chart/chart.css';

import './styles/components/CardProduct/cardProduct.css';
import './styles/components/CardUser/cardUser.css';
import './styles/components/ChartProduct/chartProduct.css';
import './styles/components/Header/header.css';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Requests from './pages/Requests';
import Users from './pages/Users';
import Chart from './pages/Chart';
import SignUp from './pages/SignUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/users" element={<Users />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
