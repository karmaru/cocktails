import {createStore, applyMiddleware, combineReducers, compose} from 'redux'

import promiseMiddleware from 'redux-promise-middleware'

import authReducer from "./redux/auth_reducer";
import cocktailReducer from './redux/cocktail_reducer'

const rootReducer = combineReducers({
  authReducer,
  cocktailReducer
})

const enhancer = compose(
  applyMiddleware(promiseMiddleware),
  // other store enhancers if any,
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__({
    name: 'Liquor State', actionsBlacklist: ['REDUX_STORAGE_SAVE']
  }) : noop => noop
);
const store = createStore(rootReducer, enhancer);

export default store;