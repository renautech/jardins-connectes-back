/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_FAMILY_OPERATIONS,
  DELETE_OPERATION,
  getFamilyOperations,
  saveFamilyOperations,
} from 'src/actions/operationList';

import {
  sendNotification,
  sendNotificationError,
} from 'src/actions/operations';

const operationList = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAMILY_OPERATIONS: {
      const {
        operationList: {
          familyId,
        },
      } = store.getState();
      axios.get(`http://3.93.151.102:5555/v1/operations/families/family/${familyId}/users/user`, { withCredentials: true })
        .then(function (res) {
          store.dispatch(saveFamilyOperations(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case DELETE_OPERATION:
      axios.delete(`http://3.93.151.102:5555/v1/operations/operation/${action.id}/users/user`, { withCredentials: true })
        .then(function (res) {
          console.log('opération supprimée !', res);
          store.dispatch(getFamilyOperations());
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default operationList;
