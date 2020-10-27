import {
  SAVE_USER_FAMILIES,
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
        loading: false,
        userBoards: action.boards,
      };
    default:
      return state;
  }
};

export default myGarden;
