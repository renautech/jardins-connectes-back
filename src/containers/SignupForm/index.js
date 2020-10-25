import { connect } from 'react-redux';
import SignupForm from 'src/components/SignupForm';

import { changeSignupFormValue, signup } from 'src/actions/signupForm';

const mapStateToProps = (store) => ({
  signupValues: store.signupForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignupFormValue: (value, name) => {
    dispatch(changeSignupFormValue(value, name));
  },
  signup: () => {
    dispatch(signup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
