/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Family = ({
  type,
  picture,
  id,
  handleOnClick,
}) => {
  return (
    <div className="mygarden__family">
      <NavLink onClick={() => handleOnClick(parseInt(id, 10))} className="mygarden__navlink" to="/liste-operations">
        <img className="mygarden__family--image" src={picture} alt="famille de légume" />
        <p className="mygarden__family--text">{type}</p>
      </NavLink>
    </div>
  );
};

Family.propTypes = {
  type: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Family;
