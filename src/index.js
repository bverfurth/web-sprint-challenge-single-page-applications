import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
