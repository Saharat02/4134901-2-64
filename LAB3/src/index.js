import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import table from "./components/table";
import List from './components/List';
import Car from "./components/Car";
import UI from "./components/UI";


ReactDOM.render(
  <>
    <Car age="22" eye="black" />
    <List />
    <UI/>
  </>,
  document.getElementById("root")
);