export const CHANGE_OPERATIONS_VALUE = 'CHANGE_OPERATIONS_VALUE';
export const GET_USER_BOARDS = 'GET_BOARDS';
export const SAVE_USER_BOARDS = 'SAVE_BOARDS';

export const changeOperationsValue = (value, name) => ({
  type: CHANGE_OPERATIONS_VALUE,
  value,
  name,
});

export const getUserBoards = () => ({
  type: GET_USER_BOARDS,
});

export const saveUserBoards = (families) => ({
  type: SAVE_USER_BOARDS,
  families,
});
