import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';
import axios from '../../services/axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      await axios.get('/user')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUser();
  }, []);
  return (
    <div>
      <Header />
      <section className="white-bg">
        <div className="title-container main-content">
          <h2>Usuários</h2>
          <h3>Visualize seus potenciais compradores/vendedores</h3>
        </div>

        <div className="user-cards main-content">
          {users.map((user) => (
            <div key={user.id}>
              <CardUser username={user.username} id={user.id} />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default Users;
