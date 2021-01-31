import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createServer } from "./server/server";
import { BrowserRouter as Router } from "react-router-dom";

createServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
reportWebVitals();
