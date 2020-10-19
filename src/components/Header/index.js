import React from 'react';

import './style.scss';

const Header = () => {
  console.log('composant header');
  return (
    <div className="header">
      <span className="logo">LOGO</span>
      <h1 className="header-title">Les Jardins connectés</h1>
      <div className="header-links">
        <a className="header-links-link"  href="/">Connexion</a>
        <a className="header-links-link"  href="/">S'inscrire</a>
      </div>
    </div>
  )
}

export default Header;
