import { userActions } from '../actions';
 const initialState = {
  userData: []
};
 const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.GET_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload
      });
    default:
      return state;
  }
};
 export default userReducer;