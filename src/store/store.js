import { createStore } from "redux";
import rootReducer from "./comboReducer";
// import thunk from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeEnhancer(applyMiddleware(thunk))
);

export default store;
