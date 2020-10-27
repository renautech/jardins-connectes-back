import {
  CHANGE_SIGNUPFORM_VALUE,
  SIGNUP_ERROR,
  CHANGE_TOWN_LIST,
  CHANGE_POSTCODE,
} from 'src/actions/signupForm';

export const initialState = {
  nickName: '',
  firstName: '',
  lastName: '',
  email: '',
  streetName: '',
  streetNumber: '',
  town: '',
  postcode: '',
  department: '',
  password: '',
  passwordverify: '',
  townList: [],
  newPostcodeFlag: false,
  signupError: '',
};

const signupForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNUPFORM_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_TOWN_LIST:
      return {
        ...state,
        townList: action.list,
        newPostcodeFlag: false,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.error,
      };
    case CHANGE_POSTCODE:
      return {
        ...state,
        newPostcodeFlag: true,
      };
    default:
      return state;
  }
};

export default signupForm;
