export const SET_OPERATIONLIST_ID = 'SET_OPERATIONLIST_ID';
export const GET_FAMILY_OPERATIONS = 'GET_FAMILY_OPERATIONS';
export const GET_OPERATION_TYPES = 'GET_OPERATION_TYPES';
export const SAVE_FAMILY_OPERATIONS = 'SAVE_FAMILY_OPERATIONS';
export const SAVE_OPERATION_TYPES = 'SAVE_OPERATION_TYPES';

export const getFamilyOperations = () => ({
  type: GET_FAMILY_OPERATIONS,
});

export const getOperationTypes = () => ({
  type: GET_OPERATION_TYPES,
});

export const setOperationListId = (id) => ({
  type: SET_OPERATIONLIST_ID,
  id,
});

export const saveFamilyOperations = (operations) => ({
  type: SAVE_FAMILY_OPERATIONS,
  operations,
});

export const saveOperationTypes = (operationTypes) => ({
  type: SAVE_OPERATION_TYPES,
});
