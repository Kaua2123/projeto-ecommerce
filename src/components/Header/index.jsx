import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import Logo from '../../imgs/logo.png';

function Header() {
  return (
    <nav className="menu">
      <div>
        <Link to="/"><img className="logo" src={Logo} alt="" /></Link>
      </div>

      <div className="nav-list">
        <ul>
          <li className="nav-item"><Link to="/products"> Produtos </Link></li>
          <li className="nav-item"><Link to="/requests"> Pedidos </Link></li>
          <li className="nav-item"><Link to="/users"> Usuários </Link></li>

        </ul>
      </div>

      <div className="user-container">
        <Link className="link" to="/chart"><FaShoppingCart size={28} /></Link>
        <Link className="link" to="/signUp"> Entrar </Link>
      </div>
    </nav>
  );
}

export default Header;
