import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';
import { loadState, saveState } from '../localStorage';

import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = loadState();

 const store = createStore (
  appReducers,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;