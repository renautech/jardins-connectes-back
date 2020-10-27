export const CHANGE_SIGNUPFORM_VALUE = 'CHANGE_SIGNUPFORM_VALUE';
export const CHANGE_POSTCODE = 'CHANGE_POSTCODE';
export const CHANGE_TOWN_LIST = 'CHANGE_TOWNLIST';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP = 'SIGNUP';

export const changeSignupFormValue = (value, name) => ({
  type: CHANGE_SIGNUPFORM_VALUE,
  value,
  name,
});

export const signup = () => ({
  type: SIGNUP,
});

export const signupError = (error) => ({
  type: SIGNUP_ERROR,
  error,
});

export const changePostcode = () => ({
  type: CHANGE_POSTCODE,
});

export const changeTownList = (townList) => ({
  type: CHANGE_TOWN_LIST,
  list: townList,
});
