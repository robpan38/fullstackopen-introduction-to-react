import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // left and right in different states
import App2 from "./App2"; // left and right in same state (using an object)
import App3 from "./App3"; // event handling revisited

ReactDOM.render(<App3 />, document.getElementById("root"));
