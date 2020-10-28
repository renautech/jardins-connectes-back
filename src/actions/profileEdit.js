export const CHANGE_PROFILEFORM_VALUE = 'CHANGE_PROFILEFORM_VALUE';

export const changeProfileFormValue = (value, name) => ({
  type: CHANGE_PROFILEFORM_VALUE,
  value,
  name,
});
