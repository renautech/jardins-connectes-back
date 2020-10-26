import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import TownList from './TownList';

const SignupForm = (
  {
    changeSignupFormValue,
    signup,
    signupValues,
    changePostcode,
    townList,
  },
) => {
  const handleOnChange = (event) => {
    changeSignupFormValue(event.target.value, event.target.name);
  };
  const handleChangePostcode = (event) => {
    changeSignupFormValue(event.target.value, event.target.name);
    changePostcode();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signup();
  };

  return (
    <div className="signupForm">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset className="signupForm__fieldset">
          <legend>Nom du jardinier</legend>
          <div className="signupForm__element">
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
          <div className="signupForm__element">
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
          <div className="signupForm__element">
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
        </fieldset>
        <fieldset className="signupForm__fieldset">
          <legend>Adresse</legend>
          <div className="signupForm__fieldset__group">

            <div className="signupForm__element signupForm__element--number">
              <label htmlFor="streetNumber">Numéro</label>
              <input
                name="streetNumber"
                id="streetNumber"
                placeholder="Numéro"
                onChange={handleOnChange}
                value={signupValues.email}
                required
              />
            </div>
            <div className="signupForm__element">
              <label htmlFor="addressRoad">Nom de la rue</label>
              <input
                name="streetName"
                id="streetName"
                placeholder="Adresse - nom de la rue"
                onChange={handleOnChange}
                value={signupValues.streetName}
              />
            </div>
            <div className="signupForm__element">
              <label htmlFor="addressNumber">Adresse - Numéro</label>
              <input
                name="streetNumber"
                id="streetNumber"
                placeholder="Numéro"
                onChange={handleOnChange}
                value={signupValues.streetNumber}
              />
            </div>
            <TownList
              handleOnChange={handleOnChange}
              signupValues={signupValues}
              townList={townList}
            />
            <div className="signupForm__element">
              <label htmlFor="postcode">Code postal</label>
              <input
                name="postcode"
                id="postcode"
                placeholder="Code postal"
                onChange={handleChangePostcode}
                value={signupValues.postcode}
              />
            </div>
            <div className="signupForm__element signupForm__element--number">
              <label htmlFor="department">Département</label>
              <input
                name="department"
                id="department"
                placeholder="Numéro de département"
                onChange={handleOnChange}
                value={signupValues.department}
                required
              />
            </div>
          </div>
        </fieldset>
        <div className="signupForm__element">
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
        <div className="signupForm__element">
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
          INSCRIPTION
        </button>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  changeSignupFormValue: PropTypes.func.isRequired,
  changePostcode: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  signupValues: PropTypes.object.isRequired,
  townList: PropTypes.array.isRequired,
};

export default SignupForm;
