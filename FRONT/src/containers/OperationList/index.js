import { connect } from 'react-redux';
import OperationList from 'src/components/OperationList';

import {
  getFamilyOperations,
  deleteOperation,
} from 'src/actions/operationList';

const mapStateToProps = (state) => ({
  operationList: state.operationList,
  operationTypes: state.myGarden.operationTypes,
  userBoards: state.operations.userBoards,
  isLogged: state.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getFamilyOperations: () => {
    dispatch(getFamilyOperations());
  },
  deleteOperation: (id) => {
    dispatch(deleteOperation(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationList);
