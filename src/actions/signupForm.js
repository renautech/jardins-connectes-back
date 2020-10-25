export const CHANGE_SIGNUPFORM_VALUE = 'CHANGE_SIGNUPFORM_VALUE';
export const SIGNUP = 'SIGNUP';

export const changeSignupFormValue = (value, name) => ({
  type: CHANGE_SIGNUPFORM_VALUE,
  value,
  name,
});

export const signup = () => ({
  type: SIGNUP,
});
