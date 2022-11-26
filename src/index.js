import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Router from "./router";

import { GlobalStyle } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
