import { connect } from 'react-redux';
import MyGarden from 'src/components/MyGarden';

import { getUserFamilies } from 'src/actions/myGarden';

const mapStateToProps = (store) => ({
  isLogged: store.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getUserFamilies: () => {
    dispatch(getUserFamilies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGarden);
