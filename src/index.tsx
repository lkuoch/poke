import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "Core/store";
import * as serviceWorker from "Core/serviceWorker";
import App from "Containers/App/Components";

// Load styles
import "antd/dist/antd.css";

const store = configureStore();

// Entry point for app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
