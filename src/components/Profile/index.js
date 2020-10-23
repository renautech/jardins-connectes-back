/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Profile = ({ dataUser }) => {
  const { user } = dataUser;
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

  return (
    <div className="profile">
      <h2 className="profile__title">Mon Profil</h2>
      <div className="profile__container">
        <p className="profile__info">
          <p className="profile__info__type">Nom : </p>
          <p className="profile__info__text">{testUser.last_name}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Prénom : </p>
          <p className="profile__info__text">{testUser.first_name}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Email : </p>
          <p className="profile__info__text">{testUser.email}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Pseudo : </p>
          <p className="profile__info__text">{testUser.nickname}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Country : </p>
          <p className="profile__info__text">{testUser.country}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Adresse postale : </p>
          <p className="profile__info__text">{testUser.postcode}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Ville : </p>
          <p className="profile__info__text">{testUser.town}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Numéro de rue : </p>
          <p className="profile__info__text">{testUser.street_number}</p>
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Nom de rue : </p>
          <p className="profile__info__text">{testUser.street_name}</p>
        </p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  dataUser: PropTypes.object.isRequired,
};

export default Profile;
