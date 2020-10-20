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

import './style.scss';

const JardinConnectes = () => {
  console.log('App launched');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const newEmail = (value) => {
    setEmail(value);
  };
  const newPassword = (value) => {
    setPassword(value);
  };

  return (
    <div className="jardinconnectes">
      <Header />
      <Navigation />
      <Route exact path="/">
        <HomeVideo />
        <Description />
      </Route>
      <Route path="/connexion">
        <LoginForm email={email} newEmail={newEmail} password={password} newPassword={newPassword}/>
      </Route>
      <Footer />
    </div>
  );
};

export default JardinConnectes;
