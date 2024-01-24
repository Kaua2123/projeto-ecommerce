import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import axios from '../../services/axios';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      await axios.get(`/product/${id}`)
        .then((response) => {
          console.log(response.data);
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProduct();
  }, []);

  return (
    <div>
      <Header />
      <div className="product-container">
        <h1>
          Produto
          { ' ' }
          {id}
        </h1>
      </div>
    </div>
  );
}

export default Product;
