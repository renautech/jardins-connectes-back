import { connect } from 'react-redux';
import JardinConnectes from 'src/components/JardinConnectes';

const mapStateToProps = (state) => ({
  isLogged: state.loginForm.isLogged,
  isSigned: state.signupForm.isSigned,
  profileEdition: state.profile.profileEdition,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JardinConnectes);
