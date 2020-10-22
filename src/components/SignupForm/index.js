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
    department,
    newDepartment,
    nickname,
    newNickname,
    town,
    newTown,
    postcode,
    newPostcode,
    handleNewUser,
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
  const handleChangeDepartment = (event) => {
    newDepartment(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewUser();
  };
  const handleChangeNickname = (event) => {
    event.preventDefault();
    newNickname(event.target.value);
  };
  const handleChangeTown = (event) => {
    event.preventDefault();
    newTown(event.target.value);
  };
  const handleChangePostcode = (event) => {
    event.preventDefault();
    newPostcode(event.target.value);
  };

  return (
    <div className="signupForm">
      <form autoComplete="off" onSubmit={handleSubmit} >
        <div className="signupForm-Element">
          <label htmlFor="nickname">Pseudo</label>
          <input
            name="nickname"
            id="nickname"
            placeholder="Pseudo"
            onChange={handleChangeNickname}
            value={nickname}
          />
        </div>
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
            required
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="addressRoad">Adresse - Rue</label>
          <input
            name="addressRoad"
            id="addressRoad"
            placeholder="Adresse - nom de la rue"
            onChange={handleChangeAddressRoad}
            value={addressRoad}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="addressNumber">Adresse - Numéro</label>
          <input
            name="addressNumber"
            id="addressNumber"
            placeholder="Numéro"
            onChange={handleChangeAddressNumber}
            value={addressNumber}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="town">Nom de la ville</label>
          <input
            name="town"
            id="town"
            placeholder="Nom de la ville"
            onChange={handleChangeTown}
            value={town}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="postcode">Code postal</label>
          <input
            name="postcode"
            id="postcode"
            placeholder="Code postal"
            onChange={handleChangePostcode}
            value={postcode}
          />
        </div>
        <div className="signupForm-Element">
          <label htmlFor="department">Numéro de département</label>
          <input
            name="department"
            id="department"
            placeholder="Numéro de département"
            onChange={handleChangeDepartment}
            value={department}
            required
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

SignupForm.defaultProps = {
  addressRoad: '',
  addressNumber: '',
};

export default SignupForm;
