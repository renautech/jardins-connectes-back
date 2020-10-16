import React from 'react';

import './style.scss';

const Header = () => {
  console.log('composant header');
  return (
    <div className="header">
      <span className="logo">LOGO</span>
      <h1>Les Jardins connectés</h1>
      <div className="header-buttons">
        <button>Connexion</button>
        <button>S'inscrire</button>
      </div>
    </div>
  )
}

export default Header;
