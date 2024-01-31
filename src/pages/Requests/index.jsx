import React, { useEffect, useState } from 'react';

import productImg from '../../imgs/product.svg';
import Header from '../../components/Header';
import axios from '../../services/axios';

function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function getRequests() {
      const token = localStorage.getItem('token');
      axios.defaults.headers.Authorization = `Bearer ${token}`;

      await axios.get('/request')
        .then((response) => {
          console.log(response.data);
          setRequests(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getRequests();
  }, []);
  return (
    <div>
      <Header />
      {requests.map((request) => (
        <div className="center">

          <div className="request-card" key={request.id}>
            <div className="grid-section">
              <div>
                <img src={productImg} alt="" />
              </div>
              <div className="center2">
                <p>
                  {' '}
                  Método de pagamento:
                  {' '}
                  <b>{request.payment_method}</b>
                </p>
                <p>
                  Preço total:
                  {' '}
                  {request.total_price}
                </p>
                <p>
                  Criado em:
                  {' '}
                  {request.created_at}
                </p>

                <button type="button" className="brown-btn">Finalizar compra</button>
              </div>

            </div>

          </div>
        </div>
      ))}

    </div>
  );
}

export default Requests;
