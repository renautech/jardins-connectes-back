/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <a className="navigation__nav__link" href="/">Accueil</a>
        <a className="navigation__nav__link" href="/">Mon Jardin</a>
      </nav>
    </div>
  );
};

export default Navigation;
