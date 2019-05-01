export const SET_LOG_IN_MODAL = 'SET_LOG_IN_MODAL';
export const SET_SIGN_UP_MODAL = 'SET_SIGN_UP_MODAL';
export const SET_CAPTCHA_VALIDATION = 'SET_CAPTCHA_VALIDATION'

export const setLogInModal = (status) => {
  return function action(dispatch) {
    dispatch(setCaptchaValidation(false));
    dispatch({
      type: SET_LOG_IN_MODAL,
      payload: status,
    })
  }
}

export const setCaptchaValidation = (status) => {
  return {
    type: SET_CAPTCHA_VALIDATION,
    payload: status
  }
}

export const setSignUpModal = (status) => {
  return function action(dispatch) {
    dispatch(setCaptchaValidation(false));
    dispatch({
      type: SET_SIGN_UP_MODAL,
      payload: status,
    })
  }
}