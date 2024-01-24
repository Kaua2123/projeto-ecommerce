import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FaCamera, FaSignOutAlt, FaUser, FaUserEdit,
} from 'react-icons/fa';
import validator from 'validator';
import { jwtDecode } from 'jwt-decode';

import axios from '../../services/axios';

function UpdateUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const { id } = decodedToken;

  useEffect(() => {
    async function getUserData() {
      await axios.get(`/user/${id}`)
        .then((response) => {
          setUserData(response.data);
          setPhoto(response.data.Image.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUserData();
  }, []);

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();

      if (username.length < 3 || username.length > 24) {
        toast.error('Nome deve ter entre 3 e 24 caracteres.');
        return;
      }

      if (!validator.isEmail(email)) {
        toast.error('Email inválido.');
        return;
      }

      if (password.length < 3 || password.length > 24) {
        toast.error('Senha deve ter entre 3 e 24 caracteres para maior segurança.');
        return;
      }

      await axios.put(`/user/update/${id}`, { username, email, password })
        .then((response) => {
          console.log(response.data);
          toast.success('Usuário editado.');
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data);
        });
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao atualizar os seus dados.');
    }
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const photoURL = URL.createObjectURL(file);
    setPhoto(photoURL);
    const formData = new FormData();
    formData.append('user_id', id);
    formData.append('image', file);

    try {
      await axios.post('/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <section className="white-bg">
      <div className="grid-sign-up">
        <div className="text-container">
          <div className="user-div">
            <h1>Seus dados</h1>
            <div className="user-picture">
              {photo ? (
                <img src={photo} alt="" />
              ) : (
                <FaUser color="white" size={120} />
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
            <div className="user-data">
              <p>Nome: </p>
              <p>{userData.username}</p>
              <p>Email: </p>
              <p>{userData.email}</p>
              <p>Senha: </p>
              <p>******</p>
            </div>
          </div>
        </div>
        <div className="form-sign-up-container">
          <div className="form-container">
            <h1>Editar dados</h1>

            <form action="" className="form-sign-up">
              <label> Nome </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Digite seu novo apelido"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <label> Email </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Digite seu novo email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label> Senha </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Digite sua nova senha"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className="brown-btn"
                type="button"
                onClick={(e) => {
                  handleUpdate(e);
                }}
              >
                <FaUserEdit style={{ marginRight: '1rem' }} />
                Editar
              </button>
              <button
                type="button"
                className="white-btn"
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/');
                }}
              >
                <FaSignOutAlt style={{ marginRight: '1rem' }} />
                Sair
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default UpdateUser;
