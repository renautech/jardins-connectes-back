export const SET_OPERATIONLIST_ID = 'SET_OPERATIONLIST_ID';
export const GET_FAMILY_OPERATIONS = 'GET_FAMILY_OPERATIONS';
export const SAVE_FAMILY_OPERATIONS = 'SAVE_FAMILY_OPERATIONS';

export const getFamilyOperations = () => ({
  type: GET_FAMILY_OPERATIONS,
});

export const setOperationListId = (id) => ({
  type: SET_OPERATIONLIST_ID,
  id,
});

export const saveFamilyOperations = (operations) => ({
  type: SAVE_FAMILY_OPERATIONS,
  operations,
});
