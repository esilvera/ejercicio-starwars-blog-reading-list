import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles/style.css"
import Home from "./Home";

ReactDOM.render(<Home />, document.querySelector("#root"));