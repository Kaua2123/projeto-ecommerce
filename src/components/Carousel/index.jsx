import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

import sadProduct from '../../imgs/sad-product.png';
import axios from '../../services/axios';
import CardProduct from '../CardProduct/index';

// estilos do swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      await axios.get('/product')
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <Swiper
          style={{ backgroundColor: 'var(--very-light-brown-color)', padding: '3rem', borderRadius: '3rem' }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {products.map((product) => (
            <SwiperSlide>

              <CardProduct
                id={product.id}
                userId={product.user_id}
                name={product.name}
                description={product.description}
                price={product.price}
              />

            </SwiperSlide>
          ))}

        </Swiper>
      ) : (
        <div
          className="no-products"
          style={{
            backgroundColor: 'var(--very-light-brown-color)',
            padding: '1rem',
            borderRadius: '3rem',
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={sadProduct}
            alt=""
            style={{
              width: '43rem',
              height: '43rem',
            }}
          />
          <h3>Parece que ainda não há produtos... Vamos começar?</h3>
        </div>
      )}

    </div>
  );
}

export function CarouselMyProducts() {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.defaults.headers.Authorization = `Bearer ${token}`;

    async function getProducts() {
      await axios.get('/userProduct')
        .then((response) => {
          console.log(response.data);
          setUserProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getProducts();
  }, []);

  return (
    <div>
      {userProducts.length > 0 ? (
        <Swiper
          style={{ backgroundColor: 'var(--very-light-brown-color)', padding: '3rem', borderRadius: '3rem' }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {userProducts.map((product) => (
            <SwiperSlide key={product.id}>

              <CardProduct
                id={product.id}
                userId={product.user_id}
                name={product.name}
                description={product.description}
                price={product.price}
              />

            </SwiperSlide>
          ))}

        </Swiper>
      ) : (
        <div
          className="no-products"
          style={{
            backgroundColor: 'var(--very-light-brown-color)',
            padding: '1rem',
            borderRadius: '3rem',
            display: 'flex',
            flexFlow: 'column wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={sadProduct}
            alt=""
            style={{
              width: '43rem',
              height: '43rem',
            }}
          />
          <h3>Parece que você ainda não vendeu produtos... Vamos começar?</h3>
        </div>
      )}

    </div>

  );
}
