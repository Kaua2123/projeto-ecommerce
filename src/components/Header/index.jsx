import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';

function Header() {
  return (
    <div className="flex">
      <Link to="/">
        <img src={Logo} className="logo" alt="" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/products"> Produtos </Link>
          </li>
          <li>
            <Link to="/requests"> Pedidos </Link>
          </li>
          <li>
            <Link to="/users"> Usuários </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
