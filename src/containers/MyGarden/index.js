import { connect } from 'react-redux';
import MyGarden from 'src/components/MyGarden';

import { getUserFamilies, getUserEmptyBoards } from 'src/actions/myGarden';

const mapStateToProps = (store) => ({
  userFamilies: store.myGarden.userFamilies,
  userEmptyBoards: store.myGarden.userEmptyBoards,
  loading: store.myGarden.loading,
  isLogged: store.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getUserFamilies: () => {
    dispatch(getUserFamilies());
  },
  getUserEmptyBoards: () => {
    dispatch(getUserEmptyBoards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGarden);
