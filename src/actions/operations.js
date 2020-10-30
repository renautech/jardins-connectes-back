export const CHANGE_OPERATIONS_VALUE = 'CHANGE_OPERATIONS_VALUE';
export const CHANGE_OPERATIONS_BOARD_VALUE = 'CHANGE_OPERATIONS_BOARD_VALUE';
export const CHANGE_OPERATIONS_FAMILY_VALUE = 'CHANGE_OPERATIONS_FAMILY_VALUE';
export const CHANGE_OPERATIONS_VARIETY_VALUE = 'CHANGE_OPERATIONS_VARIETY_VALUE';
export const RESET_OPERATIONS_VALUE = 'RESET_OPERATIONS_VALUE';
export const RESET_ALL_OPERATIONS_VALUE = 'RESET_ALL_OPERATIONS_VALUE';
export const GET_USER_BOARDS = 'GET_BOARDS';
export const GET_FAMILIES = 'GET_FAMILIES';
export const GET_VARIETIES = 'GET_VARIETIES';
export const SAVE_USER_BOARDS = 'SAVE_BOARDS';
export const SAVE_FAMILIES = 'SAVE_FAMILIES';
export const SAVE_VARIETIES = 'SAVE_VARIETIES';
export const SUBMIT_USER_OPERATION = 'SUBMIT_USER_OPERATION';
export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export const SEND_NOTIFICATION_ERROR = 'SEND_NOTIFICATION_ERROR';

export const changeOperationsValue = (value, name) => ({
  type: CHANGE_OPERATIONS_VALUE,
  value,
  name,
});

export const changeOperationsBoardValue = (name, id) => ({
  type: CHANGE_OPERATIONS_BOARD_VALUE,
  name,
  id,
});

export const changeOperationsFamilyValue = (name, id) => ({
  type: CHANGE_OPERATIONS_FAMILY_VALUE,
  name,
  id,
});

export const changeOperationsVarietyValue = (name, id) => ({
  type: CHANGE_OPERATIONS_VARIETY_VALUE,
  name,
  id,
});

export const resetOperationsValue = () => ({
  type: RESET_OPERATIONS_VALUE,
});

export const resetAllOperationsValue = () => ({
  type: RESET_ALL_OPERATIONS_VALUE,
});

export const getUserBoards = () => ({
  type: GET_USER_BOARDS,
});

export const getFamilies = () => ({
  type: GET_FAMILIES,
});

export const getVarieties = () => ({
  type: GET_VARIETIES,
});

export const saveUserBoards = (boards) => ({
  type: SAVE_USER_BOARDS,
  boards,
});

export const saveFamilies = (families) => ({
  type: SAVE_FAMILIES,
  families,
});

export const saveVarieties = (varieties) => ({
  type: SAVE_VARIETIES,
  varieties,
});

export const submitUserOperation = () => ({
  type: SUBMIT_USER_OPERATION,
});

export const sendNotification = (notification) => ({
  type: SEND_NOTIFICATION,
  notification,
});

export const sendNotificationError = (notification) => ({
  type: SEND_NOTIFICATION_ERROR,
  notification,
});

