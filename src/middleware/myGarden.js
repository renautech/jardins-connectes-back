/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_USER_FAMILIES, GET_USER_EMPTY_BOARDS, saveUserFamilies, saveUserEmptyBoards, loadingUserFamilies } from 'src/actions/myGarden';

const myGarden = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_FAMILIES:
      store.dispatch(loadingUserFamilies());
      axios.get('http://3.93.151.102:5555/v1/families/user/connected', { withCredentials: true })
        .then(function (res) {
          console.log('get_user_families', res.data);
          store.dispatch(saveUserFamilies(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case GET_USER_EMPTY_BOARDS:
      store.dispatch(loadingUserFamilies());
      axios.get('http://3.93.151.102:5555/v1/boards/empty/users/user', { withCredentials: true })
        .then(function (res) {
          console.log('save_user_empty_boards', res.data);
          store.dispatch(saveUserEmptyBoards(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default myGarden;
