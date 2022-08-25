import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "layout_mfe/header";
import Indicators from "dashboard_mfe/indicators";

const App = () => (
  <>
    <Header />
    <Indicators />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
