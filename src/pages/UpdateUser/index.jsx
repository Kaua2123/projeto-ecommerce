import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { FaUser } from 'react-icons/fa';

import axios from '../../services/axios';

function UpdateUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();

      if (!username || !email || !password) {
        toast.error('Todos os campos devem ser preenchidos.');
        return;
      }

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

      await axios.post('/user/store', { username, email, password })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          toast.error('Ocorreu um erro ao se cadastrar.');
          console.log(error);
        });

      toast.success('Usuário criado.');
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao se cadastrar.');
    }
  };

  return (
    <section className="white-bg">
      <div className="grid-sign-up">
        <div className="text-container">
          <div className="user-div">
            <h1>Seus dados</h1>
            <div className="user-picture">
              <FaUser color="white" size={120} />
            </div>
            <div className="user-data">
              <p>Nome: </p>
              <p>1234</p>
              <p>Email:</p>
              <p>123@gmail.com</p>
              <p>Senha:</p>
              <p>*****</p>
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
                type="text"
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
                Editar
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default UpdateUser;
