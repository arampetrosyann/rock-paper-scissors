import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { JssProvider } from "react-jss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <JssProvider classNamePrefix="rps" id={{ minify: true }}>
      <App />
    </JssProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
