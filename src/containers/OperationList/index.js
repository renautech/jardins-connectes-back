import { connect } from 'react-redux';
import OperationList from 'src/components/OperationList';

import {
  getFamilyOperations,
} from 'src/actions/operationList';

const mapStateToProps = (state) => ({
  operationList: state.operationList,
  operationTypes: state.myGarden.operationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  getFamilyOperations: () => {
    dispatch(getFamilyOperations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationList);
