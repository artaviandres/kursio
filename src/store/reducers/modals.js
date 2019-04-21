import { modalsActions } from '../actions';
 const initialState = {
  logInModal: false,
  signUpModal: false,
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
    default:
      return state;
  }
};
 export default modalReducer;