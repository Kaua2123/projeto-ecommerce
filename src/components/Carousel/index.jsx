import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

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
    <Swiper
      style={{ backgroundColor: 'var(--very-light-brown-color)', padding: '3rem', borderRadius: '3rem' }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <CardProduct
            name={product.name}
            description={product.description}
            price={product.price}
          />
        </SwiperSlide>
      ))}

    </Swiper>
  );
}
