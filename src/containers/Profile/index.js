import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { getProfile } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(getProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
