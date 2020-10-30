import {
  CHANGE_OPERATIONS_VALUE,
  CHANGE_OPERATIONS_BOARD_VALUE,
  CHANGE_OPERATIONS_FAMILY_VALUE,
  CHANGE_OPERATIONS_VARIETY_VALUE,
  RESET_OPERATIONS_VALUE,
  RESET_ALL_OPERATIONS_VALUE,
  SAVE_USER_BOARDS,
  SAVE_FAMILIES,
  SAVE_VARIETIES,
  SEND_NOTIFICATION,
  SEND_NOTIFICATION_ERROR,
} from 'src/actions/operations';

import { toast } from 'react-toastify';

export const initialState = {
  operationType: 'Quelle opération effectuer ?',
  boardName: '',
  boardId: '',
  boardFamily: '',
  boardFamilyId: '',
  boardVariety: '',
  boardVarietyId: '',
  comment: '',
  product: '',
  quantity: '',
  userBoards: '',
  families: '',
  varieties: [{ name: 'pas de variété' }],
};

const signupForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_OPERATIONS_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_OPERATIONS_BOARD_VALUE:
      return {
        ...state,
        boardName: action.name,
        boardId: action.id,
      };
    case CHANGE_OPERATIONS_FAMILY_VALUE:
      return {
        ...state,
        boardFamily: action.name,
        boardFamilyId: action.id,
        boardVariety: '',
        boardVarietyId: '',
      };
    case CHANGE_OPERATIONS_VARIETY_VALUE:
      return {
        ...state,
        boardVariety: action.name,
        boardVarietyId: action.id,
      };
    case RESET_OPERATIONS_VALUE:
      return {
        ...state,
        boardName: '',
        boardId: '',
        boardFamily: '',
        boardFamilyId: '',
        boardVariety: '',
        comment: '',
        product: '',
        quantity: '',
      };
    case RESET_ALL_OPERATIONS_VALUE:
      return {
        ...state,
        operationType: '',
        boardName: '',
        boardId: '',
        boardFamily: '',
        boardFamilyId: '',
        boardVariety: '',
        comment: '',
        product: '',
        quantity: '',
      };
    case SAVE_USER_BOARDS:
      return {
        ...state,
        userBoards: action.boards,
      };
    case SAVE_FAMILIES:
      return {
        ...state,
        families: action.families,
      };
    case SAVE_VARIETIES:
      return {
        ...state,
        varieties: action.varieties,
      };
    case SEND_NOTIFICATION:
      toast.success(action.notification);
      break;
    case SEND_NOTIFICATION_ERROR:
      // toast.error(action.notification);
      break;
    default:
      return state;
  }
};

export default signupForm;
