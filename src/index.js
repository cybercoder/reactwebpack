import React from "react";
import ReactDOM from "react-dom";

// import "semantic-ui-css/semantic.min.css";
import "./index.css";

import App from "./App";

ReactDOM.render(<App number={2} />, document.getElementById("app"));

module.hot.accept();
