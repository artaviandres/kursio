import { modalsActions } from '../actions';
 const initialState = {
  logInModal: false,
  signUpModal: false,
  captchaValidation: false,
};
 const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalsActions.SET_LOG_IN_MODAL:
      return Object.assign({}, state, {
        logInModal: action.payload
      });
    case modalsActions.SET_SIGN_UP_MODAL:
      return Object.assign({}, state, {
        signUpModal: action.payload
      });
    case modalsActions.SET_CAPTCHA_VALIDATION:
      return Object.assign({}, state, {
        captchaValidation: action.payload
      });
    default:
      return state;
  }
};
 export default modalReducer;