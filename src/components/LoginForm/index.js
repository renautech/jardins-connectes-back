import React from 'react';

import './style.scss';

const LoginForm = () => {
  console.log('composant LoginForm');
  return (
    <div className="loginForm">
      <form autoComplete="off" >
        <div className="loginForm-Element">
          <label htmlFor="email">Adresse Email</label>
          <input
            name="email"
            id="email"
            placeholder="Adresse Email"
          />
        </div>
        <div className="loginForm-Element">
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
          />
        </div>
        <button
          type="submit"
          className="login-form-button"
        >
          CONNEXION
        </button>
        
      </form>
    </div>
  )
}

export default LoginForm;
