export const initialState = {
  nickName: 'initialnickname',
  firstName: 'initialfirstname',
  lastName: 'testlastname',
  email: 'initialemail',
  streetName: 'initialstreetname',
  streetNumber: 'initialstreetnumber',
  town: 'initialtown',
  postcode: 'initialpostcode',
  department: 'initialdepartment',
  country: 'initialcountry',
};

const profileEdit = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_PROFILEFORM_VALUE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default profileEdit;
