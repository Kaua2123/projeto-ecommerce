import React from 'react';
import PropTypes from 'prop-types';

import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Search from '../../imgs/search.svg';

export default function CardProduct({
  id, user_id, name, price, description,
}) {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  console.log(decodedToken.id);

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
        {decodedToken.id === user_id && (
        <div className="edit-section">
          <FaEdit color="black" size={30} cursor="pointer" />
        </div>
        )}

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
