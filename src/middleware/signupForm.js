/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { SIGNUP } from 'src/actions/signupForm';
import { isLogged } from 'src/actions/loginForm';

const signupForm = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const {
        signupForm: {
          firstName,
          lastName,
          nickName,
          email,
          password,
          department,
          streetName,
          streetNumber,
          town,
          postcode,
        },
      } = store.getState();

      axios.post('http://3.93.151.102:5555/v1/signup', {
        first_name: firstName,
        last_name: lastName,
        nickname: nickName,
        email: email,
        password: password,
        department: department,
        country: 'France',
        street_name: streetName,
        street_number: parseInt((streetNumber), 10),
        town: town,
        postcode: postcode,
      })
        .then((res) => {
          store.dispatch(isLogged(true));
        })
        .catch((error) => console.error(error));
      break;
    }
    default:
      next(action);
  }
};

export default signupForm;
