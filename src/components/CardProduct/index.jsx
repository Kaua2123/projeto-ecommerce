import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { FaCamera, FaCross, FaEdit } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Search from '../../imgs/search.svg';

export default function CardProduct({
  id, name, price, description,
}) {
  const [editMode, setEditMode] = useState(false);

  const token = localStorage.getItem('token');
  return (
    <div>
      {!editMode ? (
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

          {token && (
            <div className="edit-section">
              <FaEdit
                color="black"
                size={30}
                cursor="pointer"
                onClick={() => {
                  setEditMode(true);
                }}
              />
            </div>
          )}

        </div>
      ) : (
        <div className="card-product">
          <div className="img-section">
            <img src={Search} alt="" className="product-img" />
            <div className="camera">
              <label htmlFor="picture-input">
                <FaCamera className="icon-camera" color="black" size={40} cursor="pointer" />
                <input
                  type="file"
                  name=""
                  id="picture-input"
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                />
              </label>
            </div>
          </div>
          <div className="data-section">
            <div className="product-data">
              <p><input type="text" defaultValue={name} /></p>
              <p><input type="text" defaultValue={description} /></p>
            </div>
            <div className="price">
              <p>
                <input type="text" defaultValue={price} />
                {' '}
                R$
              </p>
            </div>
            <div className="see-product">
              <Link to={`/product/${id}`}>
                <button type="button">Editar</button>
              </Link>
            </div>
            <div className="edit-section">
              <MdOutlineCancel
                color="black"
                size={30}
                cursor="pointer"
                onClick={() => {
                  setEditMode(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
