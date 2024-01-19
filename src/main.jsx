import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Header/header.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
