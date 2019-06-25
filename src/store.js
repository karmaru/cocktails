import { createStore, combineReducers } from "redux";

import authReducer from "./redux/auth_reducer";

const store = createStore(
  combineReducers({ authReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;