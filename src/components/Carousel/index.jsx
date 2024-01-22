import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';

import CardProduct from '../CardProduct/index';

// estilos do swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
  return (
    <Swiper
      style={{ backgroundColor: 'var(--very-light-brown-color)', padding: '3rem', borderRadius: '3rem' }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><CardProduct /></SwiperSlide>
      <SwiperSlide><CardProduct /></SwiperSlide>
      <SwiperSlide><CardProduct /></SwiperSlide>
      <SwiperSlide><CardProduct /></SwiperSlide>
    </Swiper>
  );
}
