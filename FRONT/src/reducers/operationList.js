import {
  SAVE_FAMILY_OPERATIONS,
  SET_OPERATIONLIST_ID,
} from 'src/actions/operationList';

export const initialState = {
  data: [],
  requestDone: false,
  familyInfo: {},
};

const operationList = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_OPERATIONLIST_ID:
      return {
        ...state,
        familyInfo: action.infos,
      };
    case SAVE_FAMILY_OPERATIONS:
      return {
        ...state,
        data: action.operations,
        requestDone: true,
      };
    default:
      return state;
  }
};

export default operationList;
