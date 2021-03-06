import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import './index.css';
// import 'semantic-ui-css/semantic.min.css';
import store from "./store/store";

store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
