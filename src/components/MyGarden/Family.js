/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Family = ({ type, img }) => {
  return (
      <div className="mygarden__family">
        <NavLink className="mygarden__navlink" to="/liste-operations">
          <img className="mygarden__family--image" src={img} alt="famille de légume" />
          <p className="mygarden__family--text">{type}</p>
        </NavLink>
      </div>
  );
};

Family.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Family;
