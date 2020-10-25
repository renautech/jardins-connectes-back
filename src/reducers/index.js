import { combineReducers } from 'redux';

import weather from './weather';
import loginForm from './loginForm';

export default combineReducers({
  weather,
  loginForm,
});
