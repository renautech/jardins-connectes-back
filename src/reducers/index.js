import { combineReducers } from 'redux';

import weather from './weather';
import loginForm from './loginForm';
import signupForm from './signupForm';
import operations from './operations';

export default combineReducers({
  weather,
  loginForm,
  signupForm,
  operations,
});
