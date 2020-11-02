/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  isLogged,
  loginError,
  loggedOut,
} from 'src/actions/loginForm';

import { serverIp } from 'src/selectors/serverInfo';

const loginForm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { loginForm: { email, password } } = store.getState();
      axios.post(`${serverIp}/v1/signin`, { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.data.state === true) {
            // console.log('logged');
            store.dispatch(isLogged());
          }
          else {
            console.log(res.data.message);
          }
        })
        .catch((error) => {
          store.dispatch(loginError('Mauvaise adresse mail / Mot de passe'));
          console.error(error);
        });
      break;
    }
    case LOGOUT: {
      axios.delete(`${serverIp}/v1/signout`, { withCredentials: true })
        .then((res) => {
          store.dispatch(loggedOut());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default loginForm;
