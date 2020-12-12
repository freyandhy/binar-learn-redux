import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import globalStore from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
