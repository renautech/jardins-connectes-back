import { connect } from 'react-redux';
import JardinConnectes from 'src/components/JardinConnectes';

const mapStateToProps = (state) => ({
  isLogged: state.loginForm.isLogged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JardinConnectes);
