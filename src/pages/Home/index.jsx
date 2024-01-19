import React from 'react';

import Header from '../../components/Header';

import Search from '../../imgs/search.svg';
import Cart from '../../imgs/cart.svg';
import Sell from '../../imgs/sell.svg';
import Contact from '../../imgs/contact.svg';

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
        <div className="main-content">
          <h3 className="info-title">Aqui você pode:</h3>

          <div className="info-grid">
            <div className="info-text-container">
              <img className="info-icon" src={Search} alt="" />
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
              <img className="info-icon" src={Cart} alt="" />
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
              <img className="info-icon" src={Sell} alt="" />
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

      <section className="white-bg">
        <div className="contact-content main-content">
          <div className="column">
            <h3 className="contact-title">
              Fale conosco
            </h3>
            <div className="contact-container">
              <div>
                <img className="illustration-img" src={Contact} alt="" />
              </div>
              <div>
                <form className="contact-form" action="#">
                  <label>Nome</label>
                  <input type="text" placeholder="Seu nome" />
                  <label>Email</label>
                  <input type="text" placeholder="Seu email" />
                  <label>Mensagem</label>
                  <input type="text" placeholder="Sua mensagem" />

                  <button className="brown-btn">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
