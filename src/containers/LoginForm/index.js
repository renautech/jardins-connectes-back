import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';

import { changeEmail, changePassword, login } from 'src/actions/loginForm';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (value) => {
    dispatch(changeEmail(value));
  },
  changePassword: (value) => {
    dispatch(changePassword(value));
  },
  login: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
