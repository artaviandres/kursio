import { combineReducers } from 'redux';
import modalsReducer from './modals';
const app = combineReducers({
  modalsReducer,
});
 export default app;