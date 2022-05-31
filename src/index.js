import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { reduxStore } from "./redux/stores/stores";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
