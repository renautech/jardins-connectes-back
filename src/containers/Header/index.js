import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { logout } from 'src/actions/loginForm';

const mapStateToProps = (state) => ({
  isLogged: state.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
