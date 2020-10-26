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
  // get Garden Families
  const getMyGardenFamilies = () => {
    axios.get('http://3.92.0.243:5555/v1')
      .then((res) => res)
      .catch((error) => console.log(error));
  };

  // get OperationsType
  const getOperationsType = () => {
    // axios.get('http://3.92.0.243:5555/v1/operation_types')
    //   .then((res) => {
    //     return res
    //   })
    //   .catch((error) => console.log(error));
  };

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
            getMyGardenFamilies={getMyGardenFamilies}
            getOperationsType={getOperationsType}
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
          <Profile dataUser={dataUser} />
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
