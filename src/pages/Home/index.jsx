import React from 'react';

import Header from '../../components/Header';

import search from '../../imgs/search.svg';
import cart from '../../imgs/cart.svg';
import sell from '../../imgs/sell.svg';

function Home() {
  return (
    <div>
      <Header />
      <section className="flex-center section">
        <div className="text-content">
          <div className="main-text">
            <h1>
              Crie.
              <br />
              {' '}
              Venda.
              {' '}
              <br />
              {' '}
              Encontre.
            </h1>
          </div>
          <h4 className="text-intro">A plataforma onde a comunidade é a inspiração.</h4>
        </div>
      </section>

      <section className="white-bg">
        <div className="intro-content">
          <h3 className="info-title">Aqui você pode:</h3>

          <div className="info-grid">
            <div className="info-text-container">
              <img className="info-icon" src={search} alt="" />
              <p className="info-text">
                Buscar pelos
                {' '}
                <br />
                {' '}
                mais diversos
                {' '}
                <br />
                {' '}
                produtos
              </p>
            </div>
            <div className="info-text-container">
              <img className="info-icon" src={cart} alt="" />
              <p className="info-text">
                Comprar produtos
                {' '}
                <br />
                {' '}
                oferecidos por
                {' '}
                <br />
                {' '}
                usuários como você
              </p>
            </div>
            <div className="info-text-container">
              <img className="info-icon" src={sell} alt="" />
              <p className="info-text">
                Vender os seus próprios
                {' '}
                <br />
                {' '}
                produtos e aumentar
                {' '}
                <br />
                {' '}
                a sua classificação
                {' '}
                <br />
                {' '}
                como vendedor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
