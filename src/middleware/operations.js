/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import {
  GET_USER_BOARDS,
  GET_FAMILIES,
  SUBMIT_USER_OPERATION,
  GET_VARIETIES,
  saveUserBoards,
  saveFamilies,
  getUserBoards,
  saveVarieties,
} from 'src/actions/operations';

import { getUserFamilies, getUserEmptyBoards } from 'src/actions/myGarden';

const operations = (store) => (next) => (action) => {
  console.log('MIDDLEWARE OPERATIONS');

  const {
    operations: {
      operationType,
      boardName,
      boardId,
      boardFamily,
      boardFamilyId,
      comment,
    },
  } = store.getState();

  switch (action.type) {
    case GET_USER_BOARDS: {
      axios.get('http://3.93.151.102:5555/v1/boards/users/user', { withCredentials: true })
        .then(function (res) {
          console.log('bonjour2');
          store.dispatch(saveUserBoards(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case GET_FAMILIES: {
      axios.get('http://3.93.151.102:5555/v1/families', { withCredentials: true })
        .then(function (res) {
          store.dispatch(saveFamilies(res.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    }
    case GET_VARIETIES: {
      if (boardFamilyId != null) {
        axios.get(`http://3.93.151.102:5555/v1/varieties/families/family/${boardFamilyId}`, { withCredentials: true })
          .then(function (res) {
            console.log('varieties', res);
            store.dispatch(saveVarieties(res.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      break;
    }
    case SUBMIT_USER_OPERATION: {
      if (operationType === 'Créer une planche') {
        axios.post('http://3.93.151.102:5555/v1/boards', {
          name: boardName,
          active: true,
          variety_id: 1,
          user_id: 6,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            // console.log(res);
            store.dispatch(getUserBoards());
            store.dispatch(getUserEmptyBoards());
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Semer') {
        axios.patch(`http://3.93.151.102:5555/v1/boards/board/${boardId}`, {
          variety_id: 2,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            store.dispatch(getUserFamilies());
            store.dispatch(getUserEmptyBoards());
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Supprimer une planche') {
        if (boardId !== '') {
          axios.delete(`http://3.93.151.102:5555/v1/boards/board/${parseInt(boardId, 10)}`, {},
            {
              withCredentials: true,
            })
            .then(function (res) {
              // console.log(res);
              store.dispatch(getUserBoards());
              store.dispatch(getUserEmptyBoards());
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
      break;
    }
    default:
      next(action);
  }
};

export default operations;
