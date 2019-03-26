import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/appstore";
import { Provider } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <a href="/" className="navbar-brand white">App</a>
    </nav>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
