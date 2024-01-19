import React from 'react';
import Header from '../../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <section className="main-content section">
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
    </div>
  );
}

export default Home;
