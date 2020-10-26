import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LoginForm = ({
  changeEmail,
  emailValue,
  changePassword,
  passwordValue,
  login,
  loginError,
  isLogged,
}) => {
  const handleChangeEmail = (event) => {
    changeEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    changePassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isLogged) {
      login();
    }
  };
  return (
    <div className="loginForm">
      <p className="loginForm-Error">{loginError}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="loginForm-Element">
          <label htmlFor="email">Adresse Email</label>
          <input
            name="email"
            id="email"
            placeholder="Adresse Email"
            onChange={handleChangeEmail}
            value={emailValue}
          />
        </div>
        <div className="loginForm-Element">
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
            value={passwordValue}
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
  );
};

LoginForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
};

LoginForm.defaultProps = {
  loginError: '',
};

export default LoginForm;
