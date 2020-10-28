/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_USER_FAMILIES, saveUserFamilies } from 'src/actions/myGarden';

const myGarden = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_FAMILIES:
      axios.get('http://3.93.151.102:5555/v1/families/user/connected', { withCredentials: true })
        .then(function (res) {
          console.log('get_user_families', res.data);
          store.dispatch(saveUserFamilies(res.data));
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
