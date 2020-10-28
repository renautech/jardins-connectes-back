import { connect } from 'react-redux';
import ProfileEdit from 'src/components/ProfileEdit';
import { changeProfileFormValue } from 'src/actions/profileEdit';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfileFormValue: (value, name) => {
    dispatch(changeProfileFormValue(value, name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
