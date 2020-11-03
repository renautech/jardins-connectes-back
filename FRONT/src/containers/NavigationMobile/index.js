import { connect } from 'react-redux';
import NavigationMobile from 'src/components/NavigationMobile';

const mapStateToProps = (state) => ({
  isLogged: state.loginForm.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMobile);
