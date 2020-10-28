/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

// components import
import Page from 'src/components/Page';
import Loader from 'src/components/Loader';
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

const JardinConnectes = ({ isLogged }) => {
  return (
    <div className="jardinconnectes">

      <Route path="/navMobile">
        <NavigationMobile />
      </Route>

      <Route exact path="/">
        <Page>
          <HomeVideo />
          <Description />
        </Page>
      </Route>

      <Route path="/mon-jardin">
        <Page>
          <Garden
            data={data}
            dataBoard={dataBoard}
          />
        </Page>
      </Route>

      <Route path="/connexion">
        {isLogged && (
          <Redirect to="/mon-jardin" />
        )}
        <Page>
          <LoginForm />
        </Page>
      </Route>

      <Route path="/inscription">
        {isLogged && (
          <Redirect to="/mon-jardin" />
        )}
        <Page>
          <SignupForm />
        </Page>
      </Route>

      <Route exact path="/mon-profil">
        <Page>
          <Profile />
          <ProfileEdit />
        </Page>
      </Route>

      <Route exact path="/mon-profil/modification">
        <Page>
          <ProfileEdit />
        </Page>
      </Route>

      <Route exact path="/liste-operations">
        <Page>
          <OperationList dataOperations={dataUser.operation} />
        </Page>
      </Route>

    </div>
  );
};

JardinConnectes.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default JardinConnectes;
