import React, { useState, useEffect} from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

// components import
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Navigation from 'src/containers/Navigation';
import Description from 'src/components/Description';
import HomeVideo from 'src/components/HomeVideo';
import LoginForm from 'src/containers/LoginForm';
import SignupForm from 'src/containers/SignupForm';
import NavigationMobile from 'src/containers/NavigationMobile';
import Garden from 'src/containers/Garden';
import Profile from 'src/containers/Profile';
import ProfileEdit from 'src/containers/ProfileEdit';

import data from 'src/data/data';
import dataBoard from 'src/data/dataBoard';
import dataUser from 'src/data/dataFake';
import './style.scss';
import OperationList from '../OperationList';
import { errorMonitor } from 'events';

const JardinConnectes = ({ isLogged }) => {
  // state for new user (signupForm component)
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUserAddressRoad, setNewUserAddressRoad] = useState('');
  const [newUserAddressNumber, setNewUserAddressNumber] = useState('');
  const [newUserDepartment, setNewUserDepartment] = useState('');
  const [newUserTown, setNewUserTown] = useState('');
  const [newUserPostcode, setNewUserPostcode] = useState('');
  const [newUserNickname, setNewUserNickname] = useState('');
  const [newUserProfilePicture, setNewProfilePicture] = useState('');
  const newEmail = (value) => {
    setNewUserEmail(value);
  };
  const newPassword = (value) => {
    setNewUserPassword(value);
  };
  const newFirstName = (value) => {
    setNewUserFirstName(value);
  };
  const newLastName = (value) => {
    setNewUserLastName(value);
  };
  const newAddressRoad = (value) => {
    setNewUserAddressRoad(value);
  };
  const newAddressNumber = (value) => {
    setNewUserAddressNumber(value);
  };
  const newDepartment = (value) => {
    setNewUserDepartment(value);
  };
  const newNickname = (value) => {
    setNewUserNickname(value);
  };
  const newPostcode = (value) => {
    setNewUserPostcode(value);
  };
  const newTown = (value) => {
    setNewUserTown(value);
  };

  // Signup
  const handleNewUser = () => {
    axios.post('http://3.92.0.243:5555/v1/signup', {
      first_name: newUserFirstName,
      last_name: newUserLastName,
      nickname: newUserNickname,
      email: newUserEmail,
      password: newUserPassword,
      department: newUserDepartment,
      country: 'France',
      street_name: newUserAddressRoad,
      street_number: parseInt((newUserAddressNumber), 10),
      town: newUserTown,
      postcode: newUserPostcode,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setIsLogged(true);
      })
      .catch((error) => setLoginError(error));
  };

  // get Garden Families
  const getMyGardenFamilies = () => {
    axios.get('http://3.92.0.243:5555/v1')
      .then((res) => res)
      .catch((error) => console.log(error));
  };

  // get OperationsType
  const getOperationsType = () => {
    axios.get('http://3.92.0.243:5555/v1/operation_types')
      .then((res) => {
        return res
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="jardinconnectes">

      <Route path="/navMobile">
        <NavigationMobile />
      </Route>

      <Route exact path="/">
        <Header />
        <Navigation />
        <HomeVideo />
        <Description />
        <Footer />
      </Route>

      <Route path="/mon-jardin">
        <Header />
        <Navigation />
        <Garden
          data={data}
          dataBoard={dataBoard}
          getMyGardenFamilies={getMyGardenFamilies}
          getOperationsType={getOperationsType}
        />
        <Footer />
      </Route>

      <Route path="/connexion">
        { isLogged && (
          <Redirect to="/mon-jardin" />
        )}
        <Header />
        <Navigation />
        <LoginForm />
        <Footer />
      </Route>

      <Route path="/inscription">
        {isLogged && (
          <Redirect to="/mon-jardin" />
        )}
        <Header />
        <Navigation />
        <SignupForm
          email={newUserEmail}
          password={newUserPassword}
          firstName={newUserFirstName}
          lastName={newUserLastName}
          addressRoad={newUserAddressRoad}
          addressNumber={newUserAddressNumber}
          department={newUserDepartment}
          nickname={newUserNickname}
          town={newUserTown}
          postcode={newUserPostcode}
          newEmail={newEmail}
          newPassword={newPassword}
          newFirstName={newFirstName}
          newLastName={newLastName}
          newAddressRoad={newAddressRoad}
          newAddressNumber={newAddressNumber}
          newDepartment={newDepartment}
          newNickname={newNickname}
          newPostcode={newPostcode}
          newTown={newTown}
          handleNewUser={handleNewUser}
        />
        <Footer />
      </Route>

      <Route exact path="/mon-profil">
        <Header />
        <Navigation />
        <Profile dataUser={dataUser} />
        <Footer />
      </Route>

      <Route exact path="/mon-profil/modification">
        <Navigation />
        <Header />
        <Navigation />
        <ProfileEdit
          dataUser={dataUser}
          email={newUserEmail}
          password={newUserPassword}
          firstName={newUserFirstName}
          lastName={newUserLastName}
          addressRoad={newUserAddressRoad}
          addressNumber={newUserAddressNumber}
          department={newUserDepartment}
          nickname={newUserNickname}
          town={newUserTown}
          postcode={newUserPostcode}
          newEmail={newEmail}
          newPassword={newPassword}
          newFirstName={newFirstName}
          newLastName={newLastName}
          newAddressRoad={newAddressRoad}
          newAddressNumber={newAddressNumber}
          newDepartment={newDepartment}
          newNickname={newNickname}
          newPostcode={newPostcode}
          newTown={newTown}
          handleNewUser={handleNewUser}
        />
        <Footer />
      </Route>
      <Route exact path="/liste-operations">
        <Header />
        <Navigation />
        <OperationList dataOperations={dataUser.operation} />
        <Footer />
      </Route>

    </div>
  );
};

JardinConnectes.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default JardinConnectes;
