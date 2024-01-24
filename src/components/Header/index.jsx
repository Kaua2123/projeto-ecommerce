import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';

import axios from '../../services/axios';
import Logo from '../../imgs/logo.png';

function Header() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState('');

  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const { id } = decodedToken;

  useEffect(() => {
    async function getUserData() {
      await axios.get(`/user/${id}`)
        .then((response) => {
          setPhoto(response.data.Image.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUserData();
  }, []);

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
            {photo ? (
              <img src={photo} alt="" />
            ) : (
              <FaUser
                color="black"
              />
            )}

          </button>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
