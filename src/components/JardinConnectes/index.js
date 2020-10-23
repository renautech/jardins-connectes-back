import React, { useState, useEffect} from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

// components import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Navigation from 'src/components/Navigation';
import Description from 'src/components/Description';
import HomeVideo from 'src/components/HomeVideo';
import LoginForm from 'src/components/LoginForm';
import SignupForm from 'src/components/SignupForm';
import NavigationMobile from 'src/components/NavigationMobile';
import Garden from 'src/components/Garden';
import Profile from 'src/components/Profile';
import ProfileEdit from 'src/components/ProfileEdit';

import data from 'src/data/data';
import dataBoard from 'src/data/dataBoard';
import dataUser from 'src/data/dataFake';
import './style.scss';
import OperationList from '../OperationList';
import { errorMonitor } from 'events';

const JardinConnectes = () => {
  console.log('App launched');

  // state for MyGarden
  const [myGardenFamilies, setMyGardenFamilies] = useState("");

  // state for connected user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const Email = (value) => {
    setEmail(value);
  };
  const Password = (value) => {
    setPassword(value);
  };

  // state for new user (signupForm component)
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserFirstName, setNewUserFirstName] = useState("");
  const [newUserLastName, setNewUserLastName] = useState("");
  const [newUserAddressRoad, setNewUserAddressRoad] = useState("");
  const [newUserAddressNumber, setNewUserAddressNumber] = useState("");
  const [newUserDepartment, setNewUserDepartment] = useState("");
  const [newUserTown, setNewUserTown] = useState("");
  const [newUserPostcode, setNewUserPostcode] = useState("");
  const [newUserNickname, setNewUserNickname] = useState("");
  const [newUserProfilePicture, setNewProfilePicture] = useState("");
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

  // Login
  const handleLogin = () => {
    axios.post('http://3.92.0.243:5555/v1/signin', { email, password })
      .then((res) => {
        if (res.data.state === true) {
          setIsLogged(true);
        }
        else {
          setIsLogged(false);
          setLoginError('Mauvais mot de passe');
        }
      })
      .catch((error) => {
        setLoginError('Mauvaise adresse mail / Mot de passe');
      });
  };

  // Signup
  const handleNewUser = () => {
    // the object newUser contains state variables filled from signup form
    // const newUser = {
    //   email: newUserEmail,
    //   password: newUserPassword,
    //   first_name: newUserFirstName,
    //   last_name: newUserLastName,
    //   street_name: newUserAddressRoad,
    //   street_number: parseInt((newUserAddressNumber), 10),
    // department: newUserDepartment,
    // town: newUserTown,
    // postcode: newUserPostcode,
    // country: 'France',
    //   nickname: newUserNickname,
    // };
    // login request to our API
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
        return res;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="jardinconnectes">

      <Route path="/navMobile">
        <NavigationMobile isLogged={isLogged} />
      </Route>

      <Route exact path="/">
        <Header isLogged={isLogged} />
        <Navigation isLogged={isLogged} />
        <HomeVideo />
        <Description />
        <Footer />
      </Route>

      <Route path="/mon-jardin">
        <Header isLogged={isLogged} />
        <Navigation isLogged={isLogged} />
        <Garden
          data={data}
          dataBoard={dataBoard}
          getMyGardenFamilies={getMyGardenFamilies}
          getOperationsType={getOperationsType}
        />
        <Footer />
      </Route>

      <Route path="/connexion">
        { isLogged && <Redirect to="/mon-jardin" /> };
        <Header isLogged={isLogged} />
        <Navigation isLogged={isLogged} />
        <LoginForm
          email={email}
          newEmail={Email}
          password={password}
          newPassword={Password}
          handleLogin={handleLogin}
          loginError={loginError}
        />
        <Footer />
      </Route>

      <Route path="/inscription">
        {isLogged && (
          <Redirect to="/mon-jardin" />
        )}
        <Header isLogged={isLogged} />
        <Navigation isLogged={isLogged} />
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
        <Header isLogged={isLogged} />
        <Navigation isLogged={isLogged} />
        <Profile dataUser={dataUser} />
        <Footer />
      </Route>

      <Route exact path="/mon-profil/modification">
        <Navigation isLogged={isLogged} />
        <Header isLogged={isLogged} />
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
        <Header isLogged={isLogged} />
        <Navigation isLogged={isLogged} />
        <OperationList dataOperations={dataUser.operation}/>
        <Footer />
      </Route>

    </div>
  );
};

export default JardinConnectes;
