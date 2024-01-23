import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import Logo from '../../imgs/logo.png';

function Header() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

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
        {!token && (
          <Link className="link" to="/signUp"> Entrar </Link>
        )}
        {token && (
        <div className="user-profile">
          <button
            type="button"
            onClick={() => {
              navigate('/updateUser');
            }}
          >
            <FaUser
              color="black"
            />
          </button>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
