import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userReducer from './user';
import authReducer from './auth';
const app = combineReducers({
  modalsReducer,
  userReducer,
  authReducer,
});
 export default app;