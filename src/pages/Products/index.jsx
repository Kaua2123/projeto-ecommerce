import React from 'react';
import Header from '../../components/Header';

import Search from '../../imgs/search.svg';

import Carousel from '../../components/Carousel';

function Products() {
  return (
    <div>
      <Header />
      <section className="minor-section">
        <div className="search-container">
          <div className="grid-search">
            <div className="search-text-container">
              <div className="text-search"><h2>Busque e encontraremos produtos pra você.</h2></div>
            </div>
            <div className="icon-input-container">
              <img className="img-search" src={Search} alt="" />
              <input type="text" placeholder="Produto..." />
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="most-buyed-container main-content">
          <h2>Produtos</h2>

          <Carousel />

        </div>
      </section>
      <section className="minor-section">
        <div className="sell-products">
          <h2>Venda de produtos</h2>
          <div className="sell-products-grid">
            <div className="sell-products-image-container">
              <img src={Search} alt="" />
            </div>
            <div className="sell-products-inputs">
              <label className="label-flex" htmlFor="">Nome</label>
              <input type="text" />
              <label className="label-flex" htmlFor="">Preço</label>
              <input type="text" />
              <label className="label-flex" htmlFor="">Estoque</label>
              <input type="text" />
              <label className="label-flex" htmlFor="">Descrição</label>
              <input type="text" />

              <button type="button" className="brown-btn">
                Vender
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
