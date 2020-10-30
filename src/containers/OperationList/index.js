import { connect } from 'react-redux';
import OperationList from 'src/components/OperationList';

import { getFamilyOperations } from 'src/actions/operationList';

const mapStateToProps = (state) => ({
  operationList: state.operationList,
});

const mapDispatchToProps = (dispatch) => ({
  getFamilyOperations: () => {
    dispatch(getFamilyOperations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationList);
