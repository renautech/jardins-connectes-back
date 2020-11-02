export const CHANGE_PROFILEFORM_VALUE = 'CHANGE_PROFILEFORM_VALUE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const DISABLE_PROFILE_EDITION = 'DISABLE_PROFILE_EDITION';
export const CHANGE_POSTCODE = 'profileEdit/CHANGE_POSTCODE';
export const CHANGE_TOWN_LIST = 'profileEdit/CHANGE_PROFILEEDITTOWN_LIST';

export const changeProfileFormValue = (value, name) => ({
  type: CHANGE_PROFILEFORM_VALUE,
  value,
  name,
});

export const disableProfileEdition = () => ({
  type: DISABLE_PROFILE_EDITION,
});

export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

export const changePostcode = () => ({
  type: CHANGE_POSTCODE,
});

export const changeTownList = (townList) => ({
  type: CHANGE_TOWN_LIST,
  list: townList,
});
