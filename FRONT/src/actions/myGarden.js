export const GET_USER_FAMILIES = 'GET_USER_FAMILIES';
export const GET_USER_EMPTY_BOARDS = 'GET_USER_EMPTY_BOARDS';
export const GET_OPERATION_TYPES = 'GET_OPERATION_TYPES';
export const SAVE_USER_FAMILIES = 'SAVE_USER_FAMILIES';
export const SAVE_USER_EMPTY_BOARDS = 'SAVE_USER_EMPTY_BOARDS';
export const SAVE_OPERATION_TYPES = 'SAVE_OPERATION_TYPES';
export const LOADING_USER_FAMILIES = 'LOADING_USER_FAMILIES';

export const getUserFamilies = () => ({
  type: GET_USER_FAMILIES,
});

export const getOperationTypes = () => ({
  type: GET_OPERATION_TYPES,
});

export const saveOperationTypes = (operationTypes) => ({
  type: SAVE_OPERATION_TYPES,
  operationTypes,
});

export const saveUserFamilies = (families) => ({
  type: SAVE_USER_FAMILIES,
  families,
});

export const loadingUserFamilies = () => ({
  type: LOADING_USER_FAMILIES,
});

export const getUserEmptyBoards = () => ({
  type: GET_USER_EMPTY_BOARDS,
});

export const saveUserEmptyBoards = (emptyBoards) => ({
  type: SAVE_USER_EMPTY_BOARDS,
  emptyBoards,
});
