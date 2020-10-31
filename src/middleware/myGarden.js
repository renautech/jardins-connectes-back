/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_USER_FAMILIES,
  GET_USER_EMPTY_BOARDS,
  GET_OPERATION_TYPES,
  saveUserFamilies,
  saveUserEmptyBoards,
  saveOperationTypes,
  loadingUserFamilies,
} from 'src/actions/myGarden';

const myGarden = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_FAMILIES:
      store.dispatch(loadingUserFamilies());
      axios.get('http://3.93.151.102:5555/v1/families/user/connected', { withCredentials: true })
        .then(function (res) {
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
          store.dispatch(saveUserEmptyBoards(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    case GET_OPERATION_TYPES:
      store.dispatch(loadingUserFamilies());
      axios.get('http://3.93.151.102:5555/v1/operation_types', { withCredentials: true })
        .then(function (res) {
          store.dispatch(saveOperationTypes(res.data));
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
