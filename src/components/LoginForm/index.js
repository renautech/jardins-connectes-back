import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LoginForm = ({
  email,
  password,
  newEmail,
  newPassword,
  handleLogin,
  loginError,
  changeEmail,
  changePassword,
  login,
}) => {
  const handleChangeEmail = (event) => {
    changeEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    changePassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login();
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
            // value={email}
          />
        </div>
        <div className="loginForm-Element">
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
            // value={password}
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
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  newEmail: PropTypes.func.isRequired,
  newPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

LoginForm.defaultProps = {
  loginError: '',
};

export default LoginForm;
