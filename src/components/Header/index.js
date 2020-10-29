/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const Header = ({ isLogged, logout, checkLogged }) => {
  const handleOnClick = () => {
    logout();
  };

  const notification = () => toast.success('Reqûete envoyée !');

  useEffect(() => {
    notification();
    if (!checkLogged) {
      if (!isLogged) {
        logout();
      }
    }
  }, []);

  return (
    
    <div className="header">
      <span className="logo">LOGO</span>
      <h1 className="header-title"><NavLink to="/">LES JARDINS CONNECTES</NavLink></h1>
      <div className="header-links">

        {!isLogged && (
        <div className="header-links-container">
          <NavLink to="/connexion">
            <p className="header-links-link">Connexion</p>
          </NavLink>
          <NavLink to="/inscription">
            <p className="header-links-link">S'inscrire</p>
          </NavLink>
        </div>
        )}

        {isLogged && (
        <div className="header-links-container">
          <NavLink to="/mon-profil">
            <p className="header-links-link">Mon Profil</p>
          </NavLink>
          <NavLink to="/">
            <p onClick={handleOnClick} className="header-links-link">Déconnexion</p>
          </NavLink>
        </div>
        )}
      </div>
      <a className="navMobile" href="/navMobile"><img src="https://img.icons8.com/plasticine/100/000000/menu.png" height="50"/></a>
      <ToastContainer
        transition={Zoom}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
