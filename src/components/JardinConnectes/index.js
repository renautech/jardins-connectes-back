import React, { useState } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

// components import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Navigation from 'src/components/Navigation';
import Description from 'src/components/Description';
import HomeVideo from 'src/components/HomeVideo';
import LoginForm from 'src/components/LoginForm';
<<<<<<< HEAD
import SignupForm from 'src/components/SignupForm';
import NavigationMobile from 'src/components/NavigationMobile';
=======
import Garden from 'src/components/Garden';
>>>>>>> front_component_Garden_and_static_data

import data from 'src/data/data';
import './style.scss';

const JardinConnectes = () => {
<<<<<<< HEAD
  console.log('App launched');
  

  // state for connected user
=======
  console.log(data);
>>>>>>> front_component_Garden_and_static_data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  
  const NewUserEmail = (value) => {
    setNewUserEmail(value);
  };
  const NewUserPassword = (value) => {
    setNewUserPassword(value);
  };
  const NewUserFirstName = (value) => {
    setNewUserFirstName(value);
  };
  const NewUserLastName = (value) => {
    setNewUserLastName(value);
  };
  const NewUserAddressRoad = (value) => {
    setNewUserAddressRoad(value);
  };
  const NewUserAddressNumber = (value) => {
    setNewUserAddressNumber(value);
  };

  // Login
  const handleLogin = () => {
    console.log("dans la fonction handleLogin")
  };
  // Submit a new user
  const handleNewUser = () => {
    console.log("dans la fonction handleNewUser")
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
        <Garden data={data} />
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
          newEmail={NewUserEmail}
          newPassword={NewUserPassword}
          newFirstName={NewUserFirstName}
          newLastName={NewUserLastName}
          newAddressRoad={NewUserAddressRoad}
          newAddressNumber={NewUserAddressNumber}
          handleNewUser={handleNewUser}
        />
        <Footer />
      </Route>
    </div>
  );
};

export default JardinConnectes;
