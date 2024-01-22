import React from 'react';

import { AiOutlineBook, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

export default function ChartProduct() {
  return (
    <div>
      <div className="chart-grid">
        <div className="img-container">
          <AiOutlineBook size={100} />
        </div>
        <div className="data-container">
          <p>Nome do produto</p>
          <p>Preço</p>
          <p> Quantidade: 0 </p>
          <div className="buttons-chart">

            <button className="btn-chart" type="button"><AiOutlinePlus size={24} /></button>
            <button className="btn-chart" type="button"><AiOutlineMinus size={24} /></button>
            <button className="btn-trash" type="button"><FaTrash /></button>
          </div>

        </div>

      </div>
    </div>
  );
}
