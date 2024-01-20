import React from 'react';
import Header from '../../components/Header';

import Search from '../../imgs/searchWhite.svg';

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
        <div className="most-buyed-container">
          <h2>Mais comprados</h2>
        </div>
      </section>
    </div>
  );
}

export default Products;
