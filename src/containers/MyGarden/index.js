import { connect } from 'react-redux';
import MyGarden from 'src/components/MyGarden';

import {
  getUserFamilies,
  getUserEmptyBoards,
  getOperationTypes,
} from 'src/actions/myGarden';

import { setOperationListId } from 'src/actions/operationList';

import { getUserBoards } from 'src/actions/operations';

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
  getOperationTypes: () => {
    dispatch(getOperationTypes());
  },

  setOperationListId: (id) => {
    dispatch(setOperationListId(id));
  },

  getUserBoards: () => {
    dispatch(getUserBoards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGarden);
