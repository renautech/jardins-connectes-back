import {
  CHANGE_OPERATIONS_VALUE,
} from 'src/actions/operations';

export const initialState = {
  operationType: 'Quelle opération effectuer ?',
  boardName: '',
  boardFamily: '',
  boardVariety: '',
  comment: '',
  product: '',
  quantity: '',
};

const signupForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_OPERATIONS_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default signupForm;
