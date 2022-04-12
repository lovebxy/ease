import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import AppRouter from "./continers/router/index";
const App = React.lazy(() => import('./App'));

ReactDOM.render(<AppRouter />, document.getElementById("root"));
