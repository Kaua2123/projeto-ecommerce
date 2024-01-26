import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../../imgs/search.svg';

export default function CardProduct({
  id, name, price, description,
}) {
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
        <div className="see-product">
          <Link to={`/product/${id}`}>
            <button type="button">Ver produto</button>
          </Link>
        </div>
        {/* só aparece se for produto DO usuário */}
        <div className="edit-section">
          <FaEdit color="black" size={30} cursor="pointer" />
        </div>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
