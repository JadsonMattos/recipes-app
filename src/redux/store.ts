import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './Reduce';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
if (window.Cypress) {
  window.store = store;
}

export default store;
