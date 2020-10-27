/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  isLogged,
  loginError,
} from 'src/actions/loginForm';

const loginForm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { loginForm: { email, password } } = store.getState();
      axios.post('http://3.93.151.102:5555/v1/signin', { email, password }, { withCredentials: true })
        .then((res) => {
          if (res.data.state === true) {
            console.log('logged');
            store.dispatch(isLogged());
          }
          else {
            store.dispatch(loginError('Mauvaise adresse mail / Mot de passe'));
          }
        })
        .catch((error) => {
          store.dispatch(loginError('Mauvaise adresse mail / Mot de passe'));
          console.error(error);
        });
      break;
    }
    case LOGOUT: {
      axios.get('http://3.93.151.102:5555/v1/signout', { withCredentials: true })
        .then((res) => {
          store.dispatch(isLogged());
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
