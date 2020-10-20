import React from 'react';
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
  return (
    <div className="jardinconnectes">
      <Header />
      <Navigation />
      <Route exact path="/">
        <HomeVideo />
        <Description />
      </Route>
      <Route path="/connexion">
        <LoginForm />
      </Route>
      <Footer />
    </div>
  );
};

export default JardinConnectes;
