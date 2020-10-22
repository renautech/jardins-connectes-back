import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = ({toggleNavMobile}) => {
  console.log('composant header');
  return (
    <div className="header">
      <span className="logo">LOGO</span>
      <h1 className="header-title"><NavLink to="/">LES JARDINS CONNECTES</NavLink></h1>
      <div className="header-links">
        <NavLink to="/connexion">
          <p className="header-links-link">Connexion</p>
        </NavLink>
        <NavLink to="/inscription">
          <p className="header-links-link">S'inscrire</p>
        </NavLink>
      </div>
      <a className="navMobile" href="/navMobile"><img src="https://img.icons8.com/plasticine/100/000000/menu.png" height="50"/></a>
    </div>
  );
};

export default Header;
