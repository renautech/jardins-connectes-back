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
      <h2 className="signupForm-Title">Inscrivez-vous !</h2>
      <p className="signupForm-Error">{signupValues.signupError}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset className="signupForm__fieldset">
          <legend>Nom du jardinier</legend>
          <div className="signupForm__element">
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
              <input
                name="streetNumber"
                id="streetNumber"
                placeholder="N°"
                onChange={handleOnChange}
                value={signupValues.streetNumber}
                required
              />
            </div>
            <div className="signupForm__element signupForm__element--street__name">
              <input
                name="streetName"
                id="streetName"
                placeholder="Nom de rue"
                onChange={handleOnChange}
                value={signupValues.streetName}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="signupForm__fieldset">
          <div className="signupForm__fieldset__group">
            <div className="signupForm__element signupForm__element--number">
              <input
                name="postcode"
                id="postcode"
                placeholder="Code postal"
                onChange={handleChangePostcode}
                value={signupValues.postcode}
              />
            </div>
            <div className="signupForm__element--townlist">
              <TownList
                className="signupForm__select"
                signupValues={signupValues}
                townList={townList}
                changeSignupFormValue={changeSignupFormValue}
              />
            </div>
          </div>
        </fieldset>
        <div className="signupForm__element">
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
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleOnChange}
            value={signupValues.password}
            required
          />
        </div>
        <div className="signupForm__element">
          <input
            name="passwordVerify"
            type="password"
            placeholder="Retapez votre mot de passe"
            onChange={handleOnChange}
            value={signupValues.passwordVerify}
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
