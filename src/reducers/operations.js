import {
  CHANGE_OPERATIONS_VALUE,
  RESET_OPERATIONS_VALUE,
  SAVE_USER_BOARDS,
} from 'src/actions/operations';

export const initialState = {
  operationType: 'Quelle opération effectuer ?',
  boardName: '',
  boardId: '',
  boardFamily: '',
  boardVariety: '',
  comment: '',
  product: '',
  quantity: '',
  userBoards: '',
};

const signupForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_OPERATIONS_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case RESET_OPERATIONS_VALUE:
      return {
        ...state,
        boardName: '',
        boardId: '',
        boardFamily: '',
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
    default:
      return state;
  }
};

export default signupForm;
