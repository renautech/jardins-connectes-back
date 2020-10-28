import { connect } from 'react-redux';
import Operations from 'src/components/Operations';

import {
  changeOperationsValue,
  changeOperationsBoardValue,
  changeOperationsFamilyValue,
  changeOperationsVarietyValue,
  resetOperationsValue,
  getUserBoards,
  getFamilies,
  getVarieties,
  submitUserOperation,
} from 'src/actions/operations';

const mapStateToProps = (state) => ({
  operation: state.operations,
  isLogged: state.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeOperationsValue: (value, name) => {
    dispatch(changeOperationsValue(value, name));
  },
  changeOperationsBoardValue: (name, id) => {
    dispatch(changeOperationsBoardValue(name, id));
  },
  changeOperationsFamilyValue: (name, id) => {
    dispatch(changeOperationsFamilyValue(name, id));
  },
  changeOperationsVarietyValue: (name, id) => {
    dispatch(changeOperationsVarietyValue(name, id));
  },
  getFamilies: () => {
    dispatch(getFamilies());
  },
  getVarieties: () => {
    dispatch(getVarieties());
  },
  getUserBoards: () => {
    dispatch(getUserBoards());
  },
  submitUserOperation: () => {
    dispatch(submitUserOperation());
  },
  resetOperationsValue: () => {
    dispatch(resetOperationsValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Operations);
