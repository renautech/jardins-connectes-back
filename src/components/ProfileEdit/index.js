/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import TownList from 'src/components/SignupForm/TownList';

import './style.scss';

const ProfileEdit = (
  {
    profile,
    changeProfileFormValue,
    updateProfile,
    disableProfileEdition,
    townList,
    changePostcode,
  },
) => {
  console.log('profile : ', profile.nickName)
  const handleOnChange = (event) => {
    console.log("handleonchange");
    changeProfileFormValue(event.target.value, event.target.name);
  };

  const handleOnChangePostcode = (event) => {
    changeProfileFormValue(event.target.value, event.target.name);
    changePostcode();
  };

  const handleOnSubmit = (event) => {
    console.log("Submit update profile");
    event.preventDefault();
    updateProfile();
  };

  const handleOnCancel = (event) => {
    console.log("Cancel update profile");
    event.preventDefault();
    disableProfileEdition();
  };

  return (
    <div className="profileEdit">
      <h2 className="profileEdit__title">Modifications de mon Profil</h2>
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <div className="profileEdit__container">
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Nom</p>
            <input
              className="profileEdit__info__input" 
              placeholder={profile.lastName}
              name="lastName"
              id="lastName"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Prénom</p>
            <input 
              className="profileEdit__info__input" 
              placeholder={profile.firstName}
              name="firstName"
              id="firstName"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Email </p>
            <input
              className="profileEdit__info__input"
              placeholder={profile.email}
              name="email"
              id="email"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Pseudo</p>
            <input
              className="profileEdit__info__input"
              placeholder={profile.nickName}
              name="nickName"
              id="nickName"
              onChange={handleOnChange}
            />
          </p>
          {/* <p className="profileEdit__info">
            <p className="profileEdit__info__type">Country : </p>
            <input className="profileEdit__info__input" placeholder={profile.country} />
          </p> */}
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Code postal</p>
            <input
              className="profileEdit__info__input"
              placeholder={profile.postcode}
              name="postcode"
              id="postcode"
              onChange={handleOnChangePostcode}
            />
          </p>
          <p className="profileEdit__info__type">Ville</p>
          <TownList
            className="signupForm__select"
            townList={townList}
            changeSignupFormValue={changeProfileFormValue}
          />
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Numéro de rue</p>
            <input
              className="profileEdit__info__input"
              placeholder={profile.streetNumber}
              name="streetNumber"
              id="streetNumber"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Nom de rue</p>
            <input
              className="profileEdit__info__input"
              placeholder={profile.streetName}
              name="streetName"
              id="streetName"
              onChange={handleOnChange}
            />
          </p>
          <div className="profileEdit__buttons">
          <button
            type="submit"
            className="profileEdit__button"
          >
            VALIDER
          </button>
          <button
            type="submit"
            className="profileEdit__button profileEdit__button--cancel"
            onClick={handleOnCancel}
          >
            ANNULER
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

ProfileEdit.propTypes = {
  changeProfileFormValue: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  disableProfileEdition: PropTypes.func.isRequired,
};

export default ProfileEdit;
