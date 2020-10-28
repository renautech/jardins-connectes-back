/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import ProfileEdit from 'src/components/ProfileEdit';

import './style.scss';

const Profile = ({ getProfile, profile }) => {
  const {
    firstName,
    lastName,
    nickName,
    email,
    streetName,
    streetNumber,
    town,
    postcode,
    department,
    country,
  } = profile;
  // requête API
  getProfile();

  return (
    <>
      { !profile.loading ? (
      <div className="profile">
        <div>
          <h2 className="profile__title">Mon Profil</h2>
          <div className="profile__container">
            <p className="profile__info">
              <p className="profile__info__type">Nom : </p>
              <p className="profile__info__text">{lastName}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Prénom : </p>
              <p className="profile__info__text">{firstName}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Email : </p>
              <p className="profile__info__text">{email}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Pseudo : </p>
              <p className="profile__info__text">{nickName}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Country : </p>
              <p className="profile__info__text">{country}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Adresse postale : </p>
              <p className="profile__info__text">{postcode}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Ville : </p>
              <p className="profile__info__text">{town}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Numéro de rue : </p>
              <p className="profile__info__text">{streetNumber}</p>
            </p>
            <p className="profile__info">
              <p className="profile__info__type">Nom de rue : </p>
              <p className="profile__info__text">{streetName}</p>
            </p>
          </div>
        </div>
      </div>
          
      ) :
        (
          <Loader />
        )}
      <ProfileEdit />
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nickName: PropTypes.string,
    email: PropTypes.string,
    streetName: PropTypes.string,
    streetNumber: PropTypes.string,
    town: PropTypes.string,
    postcode: PropTypes.string,
    department: PropTypes.string,
    country: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default Profile;
