export const SET_OPERATIONLIST_ID = 'SET_OPERATIONLIST_ID';
export const GET_FAMILY_OPERATIONS = 'GET_FAMILY_OPERATIONS';
export const SAVE_FAMILY_OPERATIONS = 'SAVE_FAMILY_OPERATIONS';
export const DELETE_OPERATION = 'DELETE_OPERATION';

export const getFamilyOperations = () => ({
  type: GET_FAMILY_OPERATIONS,
});

export const setOperationListId = (infos) => ({
  type: SET_OPERATIONLIST_ID,
  infos,
});

export const saveFamilyOperations = (operations) => ({
  type: SAVE_FAMILY_OPERATIONS,
  operations,
});

export const deleteOperation = (id) => ({
  type: DELETE_OPERATION,
  id,
});
