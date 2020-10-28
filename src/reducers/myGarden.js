import {
  SAVE_USER_FAMILIES,
  LOADING_USER_FAMILIES,
} from 'src/actions/myGarden';

export const initialState = {
  userFamilies: [],
  loading: true,
};

const myGarden = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_FAMILIES:
      return {
        ...state,
        userFamilies: action.families,
        loading: false,
      };
    case LOADING_USER_FAMILIES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default myGarden;
