import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './styles/Header/header.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Requests from './pages/Requests';
import Users from './pages/Users';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
