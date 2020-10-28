export const GET_PROFILE = 'GET_PROFILE';
export const LOAD_PROFILE = 'LOAD_PROFILE';

export const loadProfile = () => ({
  type: LOAD_PROFILE,
});

export const getProfile = () => ({
  type: GET_PROFILE,
});
