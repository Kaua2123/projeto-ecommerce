import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastProvider({ children }) {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
}

export default ToastProvider;
