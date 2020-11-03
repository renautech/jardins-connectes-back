import {
  SAVE_USER_FAMILIES,
  SAVE_USER_EMPTY_BOARDS,
  SAVE_OPERATION_TYPES,
  LOADING_USER_FAMILIES,
} from 'src/actions/myGarden';

export const initialState = {
  userFamilies: [],
  userEmptyBoards: [],
  operationTypes: [],
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
    case SAVE_USER_EMPTY_BOARDS:
      return {
        ...state,
        userEmptyBoards: action.emptyBoards,
        loading: false,
      };
    case SAVE_OPERATION_TYPES:
      return {
        ...state,
        operationTypes: action.operationTypes,
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
