import { connect } from 'react-redux';
import MyGarden from 'src/components/MyGarden';

import { getUserFamilies } from 'src/actions/myGarden';

const mapStateToProps = (store) => ({
  families: store.myGarden.userFamilies,
  loading: store.myGarden.loading,
  isLogged: store.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getUserFamilies: () => {
    dispatch(getUserFamilies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGarden);
