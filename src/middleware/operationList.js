/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_FAMILY_OPERATIONS,
  saveFamilyOperations,
} from 'src/actions/operationList';

const operationList = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAMILY_OPERATIONS: {
      const {
        operationList: {
          familyId,
        },
      } = store.getState();
      axios.get(`http://3.93.151.102:5555/v1/operations/families/family/${familyId}`, { withCredentials: true })
        .then(function (res) {
          store.dispatch(saveFamilyOperations(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default operationList;
