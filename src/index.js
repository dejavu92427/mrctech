import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { cosmeticsFetch } from "./redux/cosmeticsSlice";
store.dispatch(cosmeticsFetch());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
