import React from 'react';

import './style.scss';

const LoginForm = ({email, newEmail, newPassword, password}) => {
  console.log('composant LoginForm');
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    newEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    console.log(event.target.value);
    newPassword(event.target.value);
  };
  return (
    <div className="loginForm">
      <form autoComplete="off">
        <div className="loginForm-Element">
          <label htmlFor="email">Adresse Email</label>
          <input
            name="email"
            id="email"
            placeholder="Adresse Email"
            onChange={handleChangeEmail}
            value={email}
          />
        </div>
        <div className="loginForm-Element">
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
            value={password}
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
