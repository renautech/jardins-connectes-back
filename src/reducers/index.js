import { combineReducers } from 'redux';

import weather from './weather';
import loginForm from './loginForm';
import signupForm from './signupForm';
import profile from './profile';

export default combineReducers({
  weather,
  loginForm,
  signupForm,
  profile,
});
