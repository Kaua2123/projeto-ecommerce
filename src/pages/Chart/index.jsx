import React from 'react';
import Header from '../../components/Header';
import ChartProduct from '../../components/ChartProduct';

function Chart() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <h2>Carrinho</h2>

        <div className="chart-container">
          <ChartProduct />
          <ChartProduct />
          <ChartProduct />
        </div>
      </div>
    </div>
  );
}

export default Chart;
