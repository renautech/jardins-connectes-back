/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { SIGNUP, changeTownList, signupError } from 'src/actions/signupForm';
import { isLogged } from 'src/actions/loginForm';

const signupForm = (store) => (next) => (action) => {
  if (store.getState().signupForm.newPostcodeFlag) {
    axios.get(`https://vicopo.selfbuild.fr/cherche/${store.getState().signupForm.postcode}`)
      .then(function(res) {
        store.dispatch(changeTownList(res.data.cities));
      });
  }
  switch (action.type) {
    case SIGNUP: {
      const {
        signupForm: {
          firstName,
          lastName,
          nickName,
          email,
          password,
          passwordVerify,
          streetName,
          streetNumber,
          town,
          postcode,
        },
      } = store.getState();

      const department = postcode.substring(0, 2);

      if (password === passwordVerify) {
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
            console.log('logged');
            store.dispatch(isLogged(true));
          })
          .catch((error) => {
            console.error(error);
            store.dispatch(signupError('Désolé, vous avez du commettre une erreur'));
          });
      }
      else {
        store.dispatch(signupError('Les mots de passe ne correspondent pas'));
      }
      break;
    }
    default:
      next(action);
  }
};

export default signupForm;
