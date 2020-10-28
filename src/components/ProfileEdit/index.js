/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProfileEdit = ({ profile, changeProfileFormValue }) => {
  const testUser = {
    first_name: 'Mendoza',
    last_name: 'Patrick',
    street_name: 'Bay Parkway',
    street_number: 7,
    town: 'Vowinckel',
    postcode: 59500,
    department: 58,
    country: 'North Carolina',
    email: 'mendozapatrick@emtrac.com',
    password: 'password',
    nickname: 'Bowman',
    profile_picture: 'http://seeding/osef',
  };

  const handleOnChange = (event) => {
    console.log("handleonchange");

    changeProfileFormValue(event.target.value, event.target.name);
  };

  return (
    <div className="profileEdit">
      <h2 className="profileEdit__title">Modifications de mon Profil</h2>
      <form autoComplete="off" onSubmit="">
        <div className="profileEdit__container">
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Nom : </p>
            <input
              className="profileEdit__info__input" 
              placeholder="Nouveau nom"
              name="lastName"
              id="lastName"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Prénom : </p>
            <input 
              className="profileEdit__info__input" 
              placeholder="Nouveau prénom"
              name="firstName"
              id="firstName"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Email : </p>
            <input
              className="profileEdit__info__input"
              placeholder="Nouvel email"
              name="email"
              id="email"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Pseudo : </p>
            <input
              className="profileEdit__info__input"
              placeholder="Nouveau pseudo"
              name="nickName"
              id="nickName"
              onChange={handleOnChange}
            />
          </p>
          {/* <p className="profileEdit__info">
            <p className="profileEdit__info__type">Country : </p>
            <input className="profileEdit__info__input" placeholder="Nouveau pays" />
          </p> */}
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Code postal : </p>
            <input
              className="profileEdit__info__input"
              placeholder="Nouveau code postal"
              name="postcode"
              id="postcode"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Ville : </p>
            <input className="profileEdit__info__input" placeholder="Nouvelle commune" />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Numéro de rue : </p>
            <input
              className="profileEdit__info__input"
              placeholder="Nouveau numéro de rue"
              name="streetNumber"
              id="streetNumber"
              onChange={handleOnChange}
            />
          </p>
          <p className="profileEdit__info">
            <p className="profileEdit__info__type">Nom de rue : </p>
            <input
              className="profileEdit__info__input"
              placeholder="Nouveau nom de rue"
              name="streetName"
              id="streetName"
              onChange={handleOnChange}
            />
          </p>
        </div>
      </form>
    </div>
  );
};

ProfileEdit.propTypes = {
  changeProfileFormValue: PropTypes.func.isRequired,
};

ProfileEdit.defaultProps = {
  addressRoad: '',
  addressNumber: '',
};

export default ProfileEdit;
