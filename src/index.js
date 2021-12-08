import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { dataFetch } from "./redux/dataSlice";
store.dispatch(dataFetch());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);