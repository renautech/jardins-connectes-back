export const CHANGE_OPERATIONS_VALUE = 'CHANGE_OPERATIONS_VALUE';
export const RESET_OPERATIONS_VALUE = 'RESET_OPERATIONS_VALUE';
export const GET_USER_BOARDS = 'GET_BOARDS';
export const SAVE_USER_BOARDS = 'SAVE_BOARDS';
export const SUBMIT_USER_OPERATION = 'SUBMIT_USER_OPERATION';

export const changeOperationsValue = (value, name) => ({
  type: CHANGE_OPERATIONS_VALUE,
  value,
  name,
});

export const resetOperationsValue = () => ({
  type: RESET_OPERATIONS_VALUE,
});

export const getUserBoards = () => ({
  type: GET_USER_BOARDS,
});

export const saveUserBoards = (boards) => ({
  type: SAVE_USER_BOARDS,
  boards,
});

export const submitUserOperation = () => ({
  type: SUBMIT_USER_OPERATION,
});
