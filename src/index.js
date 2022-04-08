import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


axios.defaults.baseURL = "http://52.87.250.27:8080/api/v1";


ReactDOM.render(<App />, document.getElementById("root"));
