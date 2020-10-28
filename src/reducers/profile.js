import { LOAD_PROFILE } from 'src/actions/profile';

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
  country: '',
  loading: true,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return{
        ...state,
        nickName: `test de l'action loadProfile`,
        loading: false,
      };
    default:
      return state;
  }
};

export default profile;
