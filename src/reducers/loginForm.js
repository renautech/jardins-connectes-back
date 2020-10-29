import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  IS_LOGGED,
  LOGIN_ERROR,
  LOGGED_OUT,
} from 'src/actions/loginForm';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  checkLogged: false,
  loginError: '',
};

const loginForm = (state = initialState, action = {}) => {
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
        email: '',
        password: '',
        isLogged: !state.isLogged,
        loginError: '',
      };
    case LOGGED_OUT:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: false,
        checkLogged: true,
        loginError: '',
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

export default loginForm;
