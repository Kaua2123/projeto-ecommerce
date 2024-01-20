import React from 'react';

import Search from '../../imgs/search.svg';

export default function CardProduct() {
  return (
    <div>
      <div className="card-product">
        <div className="img-section">
          <img src={Search} alt="" className="product-img" />
        </div>
        <div className="data-section">
          <div className="product-data">
            <p>Nome do produto</p>
            <p>Breve descrição</p>
          </div>
          <div className="price">
            <p>Preço</p>
          </div>
        </div>
      </div>
    </div>
  );
}
