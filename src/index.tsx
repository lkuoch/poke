import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "fomantic-ui-css/semantic.min.css";
import "swiper/css/swiper.min.css";
import "./index.scss";

import configureStore from "Core/store";
import * as serviceWorker from "Core/serviceWorker";
import App from "Containers/App/Components";

const store = configureStore();

// Entry point for app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("pk-root")
);

serviceWorker.register();
