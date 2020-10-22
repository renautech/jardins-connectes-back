import React, { useState, useEffect} from 'react';
import {
  Route,
  Switch,
  Link
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

const JardinConnectes = () => {
  console.log('App launched');
  
  // state for connected user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("dans la fonction handleLogin");
    /*axios.get('http://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=9f8ac904cb6948bb2381c7b783d10430')
      .then( (res) => {
        console.log(res)
      }) */
    axios.get('urlapi', { email, password })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setIsLogged = true;
        console.log('Utilisateur connecté ? : ${isLogged}');
      })
      .catch((error) => console.log(error));
  };

  // Submit a new user
  const handleNewUser = () => {
    console.log("dans la fonction handleNewUser");
    // the object newUser contains state variables filled from signup form
    const newUser = {
      email: newUserEmail,
      password: newUserPassword,
      first_name: newUserPassword,
      last_name: newUserLastName,
      street_name: newUserAddressRoad,
      street_number: newUserAddressNumber,
      department: newUserDepartment,
      town: newUserTown,
      postcode: newUserPostcode,
      country: 'France',
      nickname: newUserNickname,
      profile_picture: newUserProfilePicture,
    };
    // login request to our API
    axios.get('urlapi', { newUser })
      .then((res) => {
        console.log(res)  
        console.log(res.data)
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
        <Garden data={data} dataBoard={dataBoard} />
        <Footer />
      </Route>
      <Route path="/connexion">
        <Header />
        <Navigation />
        <LoginForm
          email={email}
          newEmail={Email}
          password={password}
          newPassword={Password}
          handleLogin={handleLogin}
        />
      </Route>
      <Route path="/inscription">
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
        <Header />
        <Navigation />
        <ProfileEdit dataUser={dataUser} />
        <Footer />
      </Route>
    </div>
  );
};

export default JardinConnectes;
