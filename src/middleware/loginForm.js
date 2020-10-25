/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { LOGIN, isLogged, loginError } from 'src/actions/loginForm';

const loginForm = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { loginForm: { email, password } } = store.getState();
      axios.post('http://3.92.0.243:5555/v1/signin', { email, password })
        .then((res) => {
          if (res.data.state === true) {
            store.dispatch(isLogged(true));
          }
          else {
            store.dispatch(isLogged(false));
            store.dispatch(loginError('Mauvais mot de passe'));
          }
        })
        .catch((error) => {
          store.dispatch(isLogged(false));
          store.dispatch(loginError('Mauvaise adresse mail / Mot de passe'));
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default loginForm;
