import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import genericReducer from './genericSlice';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    generic: genericReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)


export default store;
