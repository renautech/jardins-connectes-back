/* eslint-disable arrow-body-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const NavigationMobile = ( {isLogged} ) => {


  return (
 
        <div className="navigationMobile">
          <NavLink to="/">
            <p className="navigationMobile__link" >Accueil</p>
          </NavLink>
          { isLogged && (
            <NavLink to="/mon-jardin">
              <p className="navigationMobile__link" >Mon jardin</p>
            </NavLink>
          )
          }
          <NavLink to="/connexion">
            <p className="navigationMobile__link" >Connexion</p>
          </NavLink>
          <NavLink to="/inscription">
            <p className="navigationMobile__link" >S'inscrire</p>
          </NavLink>
        </div>

  );
};

export default NavigationMobile;
