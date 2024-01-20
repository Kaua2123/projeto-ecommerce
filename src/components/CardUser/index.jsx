import React from 'react';

import { AiOutlineUser } from 'react-icons/ai';

export default function CardUser() {
  return (
    <div>
      <div className="card-user">
        <div className="user-avatar">
          <AiOutlineUser size={100} />
        </div>
        <div className="user-data">
          <p>Nome do usuário</p>
          <p>Bem avaliado</p>
        </div>
      </div>
    </div>
  );
}
