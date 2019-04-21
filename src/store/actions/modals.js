export const SET_LOG_IN_MODAL = 'SET_LOG_IN_MODAL';
export const SET_SIGN_UP_MODAL = 'SET_SIGN_UP_MODAL';

export const setLogInModal = (status) => {
  return {
    type: SET_LOG_IN_MODAL,
    payload: status,
  }
}

export const setSignUpModal = (status) => {
  return {
    type: SET_SIGN_UP_MODAL,
    payload: status,
  }
}