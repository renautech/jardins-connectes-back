/* eslint-disable arrow-body-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Navigation = ({ isLogged }) => {
  console.log(isLogged);
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <NavLink to="/">
          <p className="navigation__nav__link">Accueil</p>
        </NavLink>
        {isLogged && (
        <NavLink to="/mon-jardin">
          <p className="navigation__nav__link">Mon Jardin</p>
        </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
