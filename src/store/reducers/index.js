import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userReducer from './user';
import authReducer from './auth';
import renatReducer from './Renat/renat';
const app = combineReducers({
  modalsReducer,
  userReducer,
  authReducer,
  renatReducer,
});
 export default app;