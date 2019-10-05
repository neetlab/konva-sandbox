import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./components/root";

(() => {
  const mountNode = document.getElementById("root");
  if (!mountNode) return;

  ReactDOM.render(<Root />, mountNode);
})();
