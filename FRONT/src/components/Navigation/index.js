/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Navigation = ({ isLogged }) => {
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        {isLogged && (
        <div>
          <NavLink to="/" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Accueil
          </NavLink>
          <NavLink to="/mon-jardin" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Mon Jardin
          </NavLink>
          <NavLink to="/mon-profil" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Mon profil
          </NavLink>
        </div>
        )}
        {!isLogged && (
        <div>
          <NavLink to="/" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Accueil
          </NavLink>
          <NavLink to="/connexion" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Mon Jardin
          </NavLink>
          <NavLink to="/mon-profil" className="navigation__nav__link" activeClassName="navigation__nav__link--active" exact>
            Mon profil
          </NavLink>
        </div>
        )}
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Navigation;
