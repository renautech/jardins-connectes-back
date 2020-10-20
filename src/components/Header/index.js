import React from 'react';

import './style.scss';

const Header = ({toggleNavMobile}) => {
  console.log('composant header');
  return (
    <div className="header">
      <span className="logo">LOGO</span>
      <h1 className="header-title"><a href="/">Les Jardins connectés</a></h1>
      <div className="header-links">
        <a className="header-links-link"  href="/connexion">Connexion</a>
        <a className="header-links-link"  href="/">S'inscrire</a>
      </div>
      <a className="navMobile" href="/navMobile"><img src="https://img.icons8.com/plasticine/100/000000/menu.png" height="50"/></a>
    </div>
  )
}

export default Header;
