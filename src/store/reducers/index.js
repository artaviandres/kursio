import { combineReducers } from 'redux';
import modalsReducer from './modals';
import userReducer from './user';
const app = combineReducers({
  modalsReducer,
  userReducer,
});
 export default app;