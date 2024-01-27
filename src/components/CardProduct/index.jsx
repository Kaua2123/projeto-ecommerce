import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { FaCamera, FaEdit } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import validator from 'validator';
import Product from '../../imgs/product.svg';
import axios from '../../services/axios';

export default function CardProduct({
  id, name, price, description,
}) {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [photo, setPhoto] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getProductImage = async () => {
      await axios.get(`/product/${id}`)
        .then((response) => {
          setPhoto(response.data.Image.url);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getProductImage();
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const urlFile = URL.createObjectURL(file);
    setPhoto(urlFile);

    const formData = new FormData();
    formData.append('product_id', id);
    formData.append('image', file);

    try {
      axios.post('/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log(response);
          toast.success('Imagem atualizada.');
        });
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao atualizar a imagem.');
    }
  };

  const handleUpdate = async () => {
    try {
      if (!productName || !productDescription || !productPrice) {
        toast.error('Preencha todos os campos corretamente.');
      }

      if (!validator.isFloat(productPrice)) {
        toast.error('Preço deve ser preenchido com números.');
      }

      if (validator.isInt(productName) || validator.isInt(productDescription)) {
        toast.error('Nome e descrição não devem ser preenchidos com números.');
      }

      await axios.put(
        `/product/update/${id}`,
        {
          name: productName,
          description: productDescription,
          price: productPrice,
        },
      )
        .then((response) => {
          console.log(response.data);
          toast.success('Dados do produto atualizados.');
        })
        .catch((error) => {
          console.log(error);
          toast.error('Houve um erro ao atualizar o produto.');
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!editMode ? (
        <div className="card-product">
          <div className="img-section">

            {photo ? (
              <img src={photo} alt="" className="product-img" />
            ) : (
              <img src={Product} alt="" className="product-img" />
            )}

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
          <div className="img-section" style={{ marginBottom: '0', marginTop: '1rem' }}>
            {photo ? (
              <img src={photo} alt="" className="product-img" />
            ) : (
              <img src={Product} alt="" className="product-img" />
            )}

            <div className="camera">
              <label htmlFor="picture-input">
                <FaCamera className="icon-camera" color="black" size={40} cursor="pointer" />
                <input
                  type="file"
                  name=""
                  id="picture-input"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="data-section">
            <div className="product-data">
              <p>
                <input
                  type="text"
                  placeholder={name}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder={description}
                  onChange={(e) => {
                    setProductDescription(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="price">
              <p>
                <input
                  type="text"
                  placeholder={price}
                  onChange={(e) => {
                    setProductPrice(e.target.value);
                  }}
                />
                {' '}
                R$
              </p>
            </div>
            <div className="see-product">
              <button type="button" onClick={handleUpdate}>Editar</button>
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
