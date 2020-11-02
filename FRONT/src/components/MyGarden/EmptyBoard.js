/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const EmptyBoards = ({ type, picture }) => {
  return (
    <div className="mygarden__emptyboard">
      <img className="mygarden__emptyboard--image" src="https://static.vecteezy.com/system/resources/thumbnails/000/349/304/small/Construction__28122_29.jpg" alt="famille de légume" />
      <p className="mygarden__emptyboard--text">{type}</p>
    </div>
  );
};

EmptyBoards.propTypes = {
  type: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default EmptyBoards;
