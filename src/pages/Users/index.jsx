import React from 'react';
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';

function Users() {
  return (
    <div>
      <Header />
      <section className="white-bg">
        <div className="title-container main-content">
          <h2>Usuários</h2>
          <h3>Visualize seus potenciais compradores/vendedores</h3>
        </div>
        <div className="user-cards main-content">
          <CardUser />
        </div>
      </section>
    </div>
  );
}

export default Users;
