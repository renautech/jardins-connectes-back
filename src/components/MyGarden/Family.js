/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Family = ({ type, img }) => {
  return (
    <a className="mygarden__family" href="/">
      <img className="mygarden__family--image" src={img} alt="famille de légume" />
      <p className="mygarden__family--text">{type}</p>
    </a>
  );
};

Family.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Family;
