import { connect } from 'react-redux';
import ProfileEdit from 'src/components/ProfileEdit';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
