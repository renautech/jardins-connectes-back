export const GET_USER_FAMILIES = 'GET_USER_FAMILIES';
export const SAVE_USER_FAMILIES = 'SAVE_USER_FAMILIES';

export const getUserFamilies = () => ({
  type: GET_USER_FAMILIES,
});

export const saveUserFamilies = (families) => ({
  type: SAVE_USER_FAMILIES,
  families,
});
