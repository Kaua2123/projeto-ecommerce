import React from 'react';
import Header from '../../components/Header';
import { CarouselMyProducts } from '../../components/Carousel';

export default function MyProducts() {
  return (
    <div>
      <Header />
      <div className="my-products-container white-bg">
        <h2 className="main-content">Meus produtos</h2>
        <CarouselMyProducts />
      </div>

    </div>
  );
}
