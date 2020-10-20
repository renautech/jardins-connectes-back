/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const NavigationMobile = () => {


  return (
 
        <div className="navigationMobile">
          <a className="navigationMobile__link" href="/">Accueil</a>
          <a className="navigationMobile__link" href="/">Mon Jardin</a>
          <a className="navigationMobile__link" href="/connexion">Connexion</a>
          <a className="navigationMobile__link" href="/">S'inscrire</a>
        </div>

  );
};

export default NavigationMobile;
