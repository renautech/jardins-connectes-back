import { connect } from 'react-redux';
import ProfileEdit from 'src/components/ProfileEdit';
import { changeProfileFormValue, updateProfile, disableProfileEdition, changePostcode } from 'src/actions/profileEdit';


const mapStateToProps = (state) => ({
  profile: state.profile,
  townList: state.profileEdit.townList,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfileFormValue: (value, name) => {
    dispatch(changeProfileFormValue(value, name));
  },
  updateProfile: () => {
    dispatch(updateProfile());
  },
  disableProfileEdition: () => {
    dispatch(disableProfileEdition());
  },
  changePostcode: () => {
    dispatch(changePostcode());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
