/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_USER_BOARDS, saveUserBoards } from 'src/actions/operations';

const operations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_BOARDS:
      axios.get('http://3.93.151.102:5555/v1/boards/users/user', { withCredentials: true })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default operations;
