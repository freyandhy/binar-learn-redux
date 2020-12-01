import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Store
const globalStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
