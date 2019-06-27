import { createStore, combineReducers } from "redux";

import authReducer from "./redux/auth_reducer";
import cocktailReducer from './redux/cocktail_reducer'

const store = createStore(
  combineReducers({ authReducer, cocktailReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;