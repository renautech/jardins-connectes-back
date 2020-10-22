/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProfileEdit = ({
  dataUser,
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
  department,
  newDepartment,
  nickname,
  newNickname,
  town,
  newTown,
  postcode,
  newPostcode,
  handleNewUser,
}) => {
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
          <input className="profile__info__input" placeholder={testUser.last_name} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Prénom : </p>
          <input className="profile__info__input" placeholder={testUser.first_name} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Email : </p>
          <input className="profile__info__input" placeholder={testUser.email} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Pseudo : </p>
          <input className="profile__info__input" placeholder={testUser.nickname} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Country : </p>
          <input className="profile__info__input" placeholder={testUser.country} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Adresse postale : </p>
          <input className="profile__info__input" placeholder={testUser.postcode} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Ville : </p>
          <input className="profile__info__input" placeholder={testUser.town} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Numéro de rue : </p>
          <input className="profile__info__input" placeholder={testUser.street_number} />
        </p>
        <p className="profile__info">
          <p className="profile__info__type">Nom de rue : </p>
          <input className="profile__info__input" placeholder={testUser.street_name} />
        </p>
      </div>
    </div>
  );
};

ProfileEdit.propTypes = {
  dataUser: PropTypes.array.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  addressNumber: PropTypes.string,
  addressRoad: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  town: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  newEmail: PropTypes.func.isRequired,
  newPassword: PropTypes.func.isRequired,
  newFirstName: PropTypes.func.isRequired,
  newLastName: PropTypes.func.isRequired,
  newAddressNumber: PropTypes.func.isRequired,
  newAddressRoad: PropTypes.func.isRequired,
  newDepartment: PropTypes.func.isRequired,
  newNickname: PropTypes.func.isRequired,
  newTown: PropTypes.func.isRequired,
  newPostcode: PropTypes.func.isRequired,
  handleNewUser: PropTypes.func.isRequired,
};

ProfileEdit.defaultProps = {
  addressRoad: '',
  addressNumber: '',
};

export default ProfileEdit;
