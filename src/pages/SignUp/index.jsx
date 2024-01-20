import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';

function SignUp() {
  const [isLogin, setIsLogin] = useState(false);

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
              <label> Nome </label>
              <input type="text" name="" id="" />
              <label> Email </label>
              <input type="text" name="" id="" />
              <label> Senha </label>
              <input type="text" name="" id="" />

              {!isLogin ? (
                <button type="submit" className="brown-btn">
                  Criar conta
                </button>
              ) : (
                <button type="submit" className="brown-btn">
                  Entrar
                </button>
              )}
              {!isLogin ? (
                <button
                  onClick={(e) => {
                    setIsLogin(true);
                  }}
                  type="button"
                  className="white-btn"
                >
                  Já possuo uma conta
                </button>
              ) : (
                <button
                  onClick={(e) => {
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
