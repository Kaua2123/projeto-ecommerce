import React from 'react';
import PropTypes from 'prop-types';

import Search from '../../imgs/search.svg';

export default function CardProduct({ name, price, description }) {
  return (
    <div>
      <div className="card-product">
        <div className="img-section">
          <img src={Search} alt="" className="product-img" />
        </div>
        <div className="data-section">
          <div className="product-data">
            <p>{name}</p>
            <p>{description}</p>
          </div>
          <div className="price">
            <p>
              {price}
              {' '}
              R$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
