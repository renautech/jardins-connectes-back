export const GET_PROFILE = 'GET_PROFILE';
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const SHOW_PROFILE_EDITION = 'SHOW_PROFILE_EDITION';

export const showProfileEdition = () => ({
  type: SHOW_PROFILE_EDITION,
});

export const loadProfile = (profileData) => ({
  type: LOAD_PROFILE,
  profileData,
});

export const getProfile = () => ({
  type: GET_PROFILE,
});
