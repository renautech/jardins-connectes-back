import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SignupForm = (
  {
    email,
    newEmail,
    newPassword,
    password,
    firstName,
    newFirstName,
    lastName,
    newLastName,
    addressRoad,
    newAddressRoad,
    addressNumber,
    newAddressNumber,
    handleNewUser
  },
) => {
  console.log('composant SignupForm');
  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    newEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    console.log(event.target.value);
    newPassword(event.target.value);
  };
  const handleChangeFirstName = (event) => {
    newFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    newLastName(event.target.value);
  };
  const handleChangeAddressRoad = (event) => {
    newAddressRoad(event.target.value);
  };
  const handleChangeAddressNumber = (event) => {
    newAddressNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewUser();
  };

  return (
    <div className="signupForm">
      <form autoComplete="off" onSubmit={handleSubmit} >
        <div className="signupForm-Element">
          <label htmlFor="firstname">Prénom</label>
          <input
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            onChange={handleChangeFirstName}
            value={firstName}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="lastname">Nom</label>
          <input
            name="lastname"
            id="lastname"
            placeholder="Nom"
            onChange={handleChangeLastName}
            value={lastName}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="email">Adresse Email</label>
          <input
            name="email"
            id="email"
            placeholder="Adresse Email"
            onChange={handleChangeEmail}
            value={email}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="addressRoad">Prénom</label>
          <input
            name="addressRoad"
            id="addressRoad"
            placeholder="Adresse - nom de la rue"
            onChange={handleChangeAddressRoad}
            value={addressRoad}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="addressNumber">Numéro</label>
          <input
            name="addressNumber"
            id="addressNumber"
            placeholder="Numéro"
            onChange={handleChangeAddressNumber}
            value={addressNumber}
          />
        </div>
        <div className="signupForm-Element">
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
        >
          CONNEXION
        </button>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  addressNumber: PropTypes.string,
  addressRoad: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  newEmail: PropTypes.func.isRequired,
  newPassword: PropTypes.func.isRequired,
  newFirstName: PropTypes.func.isRequired,
  newLastName: PropTypes.func.isRequired,
  newAddressNumber: PropTypes.func.isRequired,
  newAddressRoad: PropTypes.func.isRequired,
  handleNewUser: PropTypes.func.isRequired
};

SignupForm.defaultProps = {
  addressRoad: '',
  addressNumber: '',
};

export default SignupForm;
