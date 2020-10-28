/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_PROFILE, loadProfile } from 'src/actions/profile';

const profile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      if (store.getState().profile.loading) {
        axios.get('http://3.93.151.102:5555/v1/users/user/3', { withCredentials: true })
          .then(function (res) {
            console.log('requête profile réussie');
            // update state with user profile data
            store.dispatch(loadProfile(res.data));
          })
          .catch(function (error) {
            console.log('Erreur dans la récupération du profil : ', error);
            // juste pour tester tant que le serveur back est down
            store.dispatch(loadProfile());
          });
      }

      break;
    }
    default:
      next(action);
  }
};

export default profile;
