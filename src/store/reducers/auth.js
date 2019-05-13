import { authActions } from '../actions';
 const initialState = {
  userData: '',
};
 const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.GET_USER_LOGIN:
      return Object.assign({}, state, {
        userData: action.payload
      });
    case authActions.GET_USER_SIGNUP:
      return Object.assign({}, state, {
        userData: action.payload
      });
    default:
      return state;
  }
};
 export default authReducer;