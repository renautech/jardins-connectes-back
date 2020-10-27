/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_USER_BOARDS, SUBMIT_USER_OPERATION, saveUserBoards, getUserBoards } from 'src/actions/operations';

const operations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_BOARDS:
      axios.get('http://3.93.151.102:5555/v1/boards/users/user', { withCredentials: true })
        .then(function (res) {
          console.log(res);
          store.dispatch(saveUserBoards(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case SUBMIT_USER_OPERATION: {
      const {
        operations: {
          operationType,
          boardName,
          comment,
        },
      } = store.getState();

      if (operationType === 'Créer une planche') {
        axios.post('http://3.93.151.102:5555/v1/boards', {
          name: boardName,
          active: true,
          variety_id: 1,
          user_id: 11,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
            store.dispatch(getUserBoards());
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default operations;
