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
  sendNotification,
  sendNotificationWarning,
  sendNotificationError,
  resetAllOperationsValue,
} from 'src/actions/operations';

import {
  getUserFamilies,
  getUserEmptyBoards,
} from 'src/actions/myGarden';

import { serverIp } from 'src/selectors/serverInfo';

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
      axios.get(`${serverIp}/v1/boards/users/user`, { withCredentials: true })
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
      axios.get(`${serverIp}/v1/families`, { withCredentials: true })
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
        axios.get(`${serverIp}/v1/varieties/families/family/${boardFamilyId}`, { withCredentials: true })
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
      if (operationType === 'Créer une planche') { // CREATION DE PLANCHE
        if (boardName === '') {
          store.dispatch(sendNotificationWarning('Vous devez donner un nom à votre planche'));
        }
        else {
          axios.post(`${serverIp}/v1/boards/users/user`, {
            name: boardName,
            active: true,
            variety_id: 1,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              // console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(getUserFamilies());
              store.dispatch(getUserBoards());
              store.dispatch(getUserEmptyBoards());
              store.dispatch(sendNotification(`Planche "${boardName}" créée !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Labourer') { // LABOURE
        if (boardId === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
            operation_type_id: 2,
            board_id: boardId,
            comment: comment,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`"${boardName}" a bien été labourée`));
            })
            .catch(function (error) {
              console.error('ERREUR ???', error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Semer') { // SEMER SUR UNE PLANCHE
        if (boardId === '' || boardFamily === '' || boardVariety === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche, une famille et une variété de légume !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
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
          axios.patch(`${serverIp}/v1/boards/board/${boardId}/users/user/`, {
            variety_id: boardVarietyId,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              store.dispatch(resetAllOperationsValue());
              store.dispatch(getUserFamilies());
              store.dispatch(getUserEmptyBoards());
              store.dispatch(sendNotification(`${boardFamily} bien plantées sur la planche "${boardName}" !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Arroser') { // ARROSER UNE PLANCHE
        if (boardId === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
            operation_type_id: 4,
            board_id: boardId,
            comment: comment,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`Planche "${boardName}" a bien été arrosée !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Fertiliser') { // FERTILISER UNE PLANCHE
        if (boardId === '' || product === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche et un fertilisant !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
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
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`Planche "${boardName}" a bien été fertilisée !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Traiter') { // TRAITER UNE PLANCHE
        if (boardId === '' || product === '' || quantity === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche, un produit et une quantité !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
            operation_type_id: 6,
            board_id: boardId,
            product_name: product,
            comment: comment,
            quantity: parseInt(quantity, 10),
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`Planche "${boardName}" a bien été traitée !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Désherber') { // DESHERBER UNE PLANCHE
        if (boardId === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
            operation_type_id: 7,
            board_id: boardId,
            comment: comment,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`Planche "${boardName}" a bien été désherbée !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Récolter') { // RECOLTER UNE PLANCHE
        if (boardId === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche et la quantité de votre récolte !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
            operation_type_id: 8,
            board_id: boardId,
            quantity: parseInt(quantity, 10),
            comment: comment,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`Récolte de "${boardName}" a bien été enregistrée !`));
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
            });
        }
      }
      if (operationType === 'Supprimer une planche') { // SUPPRIMER UNE PLANCHE
        if (boardId === '') {
          store.dispatch(sendNotificationWarning('Vous devez sélectionner une planche !'));
        }
        else {
          axios.post(`${serverIp}/v1/operations/users/user`, {
            operation_type_id: 9,
            board_id: boardId,
          },
          {
            withCredentials: true,
          })
            .then(function (res) {
              console.log(res);
              store.dispatch(resetAllOperationsValue());
              store.dispatch(sendNotification(`La planche "${boardName}" a bien été supprimée.`));
              axios.delete(`${serverIp}/v1/boards/board/${boardId}/users/user/`,
                {
                  withCredentials: true,
                })
                .then(function (res) {
                  // console.log(res);
                  store.dispatch(resetAllOperationsValue());
                  store.dispatch(getUserFamilies());
                  store.dispatch(getUserBoards());
                  store.dispatch(getUserEmptyBoards());
                })
                .catch(function (error) {
                  console.log(error);
                  store.dispatch(sendNotificationError('Erreur'));
                });
            })
            .catch(function (error) {
              console.log(error);
              store.dispatch(sendNotificationError('Erreur'));
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
