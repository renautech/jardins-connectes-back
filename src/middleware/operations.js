/* eslint-disable object-shorthand */
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
  const {
    operations: {
      operationType,
      boardName,
      boardId,
      boardFamily,
      boardFamilyId,
      boardVariety,
      boardVarietyId,
      comment,
      product,
      quantity,
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
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 1,
          board_id: boardId,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        axios.post('http://3.93.151.102:5555/v1/boards/users/user', {
          name: boardName,
          active: true,
          variety_id: 1,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            // console.log(res);
            store.dispatch(getUserFamilies());
            store.dispatch(getUserBoards());
            store.dispatch(getUserEmptyBoards());
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Labourer') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 2,
          board_id: boardId,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Semer') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 3,
          board_id: boardId,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        axios.patch(`http://3.93.151.102:5555/v1/boards/board/${boardId}/users/user/`, {
          variety_id: boardVarietyId,
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
      if (operationType === 'Arroser') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 4,
          board_id: boardId,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Fertiliser') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 5,
          board_id: boardId,
          product_name: product,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Traiter') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 6,
          board_id: boardId,
          comment: comment,
          product_name: product,
          quantity: parseInt(quantity, 10),
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Désherber') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 7,
          board_id: boardId,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Récolter') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 8,
          board_id: boardId,
          qunatity: quantity,
          comment: comment,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (operationType === 'Supprimer une planche') {
        axios.post('http://3.93.151.102:5555/v1/operations/users/user', {
          operation_type_id: 9,
          board_id: boardId,
        },
        {
          withCredentials: true,
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        axios.delete(`http://3.93.151.102:5555/v1/boards/board/${boardId}/users/user/`,
          {
            withCredentials: true,
          })
          .then(function (res) {
            // console.log(res);
            store.dispatch(getUserFamilies());
            store.dispatch(getUserBoards());
            store.dispatch(getUserEmptyBoards());
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
