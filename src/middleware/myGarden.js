/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_USER_FAMILIES, saveUserFamilies } from 'src/actions/myGarden';

const myGarden = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_FAMILIES:
      axios.get('http://3.93.151.102:5555/v1/boards/users/user')
      // axios.get('http://3.93.151.102:5555/v1/families/user/connected')
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

export default myGarden;
