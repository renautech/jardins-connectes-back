export const GET_USER_FAMILIES = 'GET_USER_FAMILIES';
export const GET_USER_EMPTY_BOARDS = 'GET_USER_EMPTY_BOARDS';
export const SAVE_USER_FAMILIES = 'SAVE_USER_FAMILIES';
export const SAVE_USER_EMPTY_BOARDS = 'SAVE_USER_EMPTY_BOARDS';
export const LOADING_USER_FAMILIES = 'LOADING_USER_FAMILIES';

export const getUserFamilies = () => ({
  type: GET_USER_FAMILIES,
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
