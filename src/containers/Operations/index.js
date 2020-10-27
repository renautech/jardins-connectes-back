import { connect } from 'react-redux';
import Operations from 'src/components/Operations';

import { changeOperationsValue, resetOperationsValue, getUserBoards, submitUserOperation } from 'src/actions/operations';

const mapStateToProps = (state) => ({
  operation: state.operations,
  isLogged: state.loginForm.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeOperationsValue: (value, name) => {
    dispatch(changeOperationsValue(value, name));
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
