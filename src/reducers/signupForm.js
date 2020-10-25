import {
  CHANGE_SIGNUPFORM_VALUE,
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
};

const signupForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNUPFORM_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default signupForm;
