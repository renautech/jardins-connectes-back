/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Family = ({ type, img }) => {
  return (
    <NavLink to="/liste-operations">
      <div className="mygarden__family">
        <img className="mygarden__family--image" src={img} alt="famille de légume" />
        <p className="mygarden__family--text">{type}</p>
      </div>
    </NavLink>
  );
};

Family.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Family;
