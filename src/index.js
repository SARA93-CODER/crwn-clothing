import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { persistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //we passing the (store) to the provider, so we can access the all reducers and props needed inside it
  <Provider store={store}>
    <BrowserRouter>
      <persistGate persistor={persistor}>
        <App />
      </persistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
