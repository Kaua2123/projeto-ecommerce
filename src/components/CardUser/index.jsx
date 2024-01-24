import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function CardUser({ username, id }) {
  return (
    <div>
      <div className="card-user" key={id}>
        <div className="user-avatar">
          <AiOutlineUser size={100} />
        </div>
        <div className="user-data">
          <p>{username}</p>
          <p>Bem avaliado</p>
        </div>
      </div>
    </div>
  );
}

CardUser.propTypes = {
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
