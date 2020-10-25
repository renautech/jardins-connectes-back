import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SignupForm = (
  {
    changeSignupFormValue,
    signup,
    signupValues,
  },
) => {
  const handleOnChange = (event) => {
    changeSignupFormValue(event.target.value, event.target.name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signup();
  };

  return (
    <div className="signupForm">
      <form autoComplete="off" onSubmit={handleSubmit} >
        <div className="signupForm-Element">
          <label htmlFor="nickname">Pseudo</label>
          <input
            name="nickName"
            id="nickName"
            placeholder="Pseudo"
            onChange={handleOnChange}
            value={signupValues.nickName}
            required
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="firstname">Prénom</label>
          <input
            name="firstName"
            id="firstName"
            placeholder="Prénom"
            onChange={handleOnChange}
            value={signupValues.firstName}
            required
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="lastname">Nom</label>
          <input
            name="lastName"
            id="lastName"
            placeholder="Nom"
            onChange={handleOnChange}
            value={signupValues.lastName}
            required
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="email">Adresse Email</label>
          <input
            name="email"
            id="email"
            placeholder="Adresse Email"
            onChange={handleOnChange}
            value={signupValues.email}
            required
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="addressRoad">Adresse - Rue</label>
          <input
            name="streetName"
            id="streetName"
            placeholder="Adresse - nom de la rue"
            onChange={handleOnChange}
            value={signupValues.streetName}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="addressNumber">Adresse - Numéro</label>
          <input
            name="streetNumber"
            id="streetNumber"
            placeholder="Numéro"
            onChange={handleOnChange}
            value={signupValues.streetNumber}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="town">Nom de la ville</label>
          <input
            name="town"
            id="town"
            placeholder="Nom de la ville"
            onChange={handleOnChange}
            value={signupValues.town}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="postcode">Code postal</label>
          <input
            name="postcode"
            id="postcode"
            placeholder="Code postal"
            onChange={handleOnChange}
            value={signupValues.postcode}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="department">Numéro de département</label>
          <input
            name="department"
            id="department"
            placeholder="Numéro de département"
            onChange={handleOnChange}
            value={signupValues.department}
            required
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="password">Mot de passe</label>
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleOnChange}
            value={signupValues.password}
            required
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
  changeSignupFormValue: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  signupValues: PropTypes.object.isRequired,
};

// SignupForm.defaultProps = {
//   addressRoad: '',
//   addressNumber: '',
// };

export default SignupForm;
