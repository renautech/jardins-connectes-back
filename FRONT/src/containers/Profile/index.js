import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { getProfile, showProfileEdition, enableLoading } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(getProfile());
  },
  showProfileEdition: () => {
    dispatch(showProfileEdition());
  },
  enableLoading: () => {
    dispatch(enableLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
