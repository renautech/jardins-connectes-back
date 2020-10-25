import { CHANGE_EMAIL, CHANGE_PASSWORD, IS_LOGGED, LOGIN_ERROR } from 'src/actions/loginForm';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  loginError: '',
};

const weather = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
      };
    default:
      return state;
  }
};

export default weather;
