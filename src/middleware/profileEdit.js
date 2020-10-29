/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { UPDATE_PROFILE, disableProfileEdition, changeTownList } from 'src/actions/profileEdit';

const profileEdit = (store) => (next) => (action) => {
  if (store.getState().profileEdit.newPostcodeFlag) {
    axios.get(`https://vicopo.selfbuild.fr/cherche/${store.getState().profileEdit.postcode}`)
      .then(function(res) {
        store.dispatch(changeTownList(res.data.cities));
      });
  }
  switch(action.type) {
    case UPDATE_PROFILE: {
      // delete empty values from the profileEdit form.
      // It avoids to empty data that the user did not change.
      const newdata = store.getState().profileEdit;
      // eslint-disable-next-line no-restricted-syntax
      for (let value in newdata) {
        if (newdata[value] === '') {
          delete newdata[value];
        }
      };
      // Change field names to follow API field names
      newdata.first_name = newdata.firstName;
      delete newdata.firstName;
      newdata.last_name = newdata.lastName;
      delete newdata.lastName;
      newdata.street_name = newdata.streetName;
      delete newdata.streetName;
      newdata.street_number = newdata.streetNumber;
      delete newdata.streetNumber;
      newdata.nickname = newdata.nickName;
      delete newdata.nickName;

      axios.patch('http://3.93.151.102:5555/v1/users/user/7', newdata)
        .then(function (res) {
          console.log('update profile réussie');
          store.dispatch(disableProfileEdition());
          // force page reload to get new profile data from API
          window.location.reload();
        })
        .catch(function (error) {
          console.log('Erreur dans la récupération du profil : ', error);
        });
    }
    default:
      next(action);
  }
}

export default profileEdit;
