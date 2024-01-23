import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

import axios from '../../services/axios';

function SignUp() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
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

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      if (!email || !password) {
        toast.error('Todos os campos devem ser preenchidos.');
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

      await axios.post('/login', { email, password })
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem('token', token);
        })
        .catch((error) => {
          console.log(error);
        });

      toast.success('Você entrou na sua conta.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao se cadastrar.');
    }
  };

  return (
    <section className="white-bg">
      <div className="grid-sign-up">
        <div className="text-container">
          <div className="text-div">

            <h1 className="text">
              Crie.
              {' '}
              <br />
              {' '}
              Venda.
              {' '}
              <br />
              {' '}
              Encontre.
            </h1>
          </div>
        </div>
        <div className="form-sign-up-container">
          <div className="form-container">
            {!isLogin ? (
              <h1>Cadastre-se</h1>
            ) : (
              <h1>Fazer login</h1>
            )}

            <form action="" className="form-sign-up">
              {!isLogin && (
                <>
                  <label> Nome </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </>
              )}

              <label> Email </label>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label> Senha </label>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {!isLogin ? (
                <button
                  type="submit"
                  onClick={(e) => {
                    handleRegister(e);
                  }}
                  className="brown-btn"
                >
                  Criar conta
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                  className="brown-btn"
                >
                  Entrar
                </button>
              )}
              {!isLogin ? (
                <button
                  onClick={() => {
                    setIsLogin(true);
                  }}
                  type="button"
                  className="white-btn"
                >
                  Já possuo uma conta
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsLogin(false);
                  }}
                  type="button"
                  className="white-btn"
                >
                  Quero me cadastrar
                </button>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SignUp;
