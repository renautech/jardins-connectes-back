import { CHANGE_TOWN_LIST, CHANGE_POSTCODE } from 'src/actions/profileEdit';

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
  newPostcodeFlag: false,
  townList: [],
};

const profileEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_PROFILEFORM_VALUE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_POSTCODE:
      return {
        ...state,
        newPostcodeFlag: true,
      };
    case CHANGE_TOWN_LIST:
      return {
        ...state,
        townList: action.list,
        newPostcodeFlag: false,
      };
    default:
      return state;
  }
};

export default profileEdit;
