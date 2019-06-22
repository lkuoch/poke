import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import App from "./Components";

// Load styles
import "antd/dist/antd.css";
import "Styles/app.less";

const store = configureStore();

// Entry point for app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("poke-root")
);
