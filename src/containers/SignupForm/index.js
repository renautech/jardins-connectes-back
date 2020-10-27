import { connect } from 'react-redux';
import SignupForm from 'src/components/SignupForm';

import { changeSignupFormValue, signup, changePostcode } from 'src/actions/signupForm';

const mapStateToProps = (store) => ({
  signupValues: store.signupForm,
  newPostcodeFlag: store.newPostcodeFlag,
  townList: store.signupForm.townList,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignupFormValue: (value, name) => {
    dispatch(changeSignupFormValue(value, name));
  },
  signup: () => {
    dispatch(signup());
  },
  changePostcode: () => {
    dispatch(changePostcode());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
