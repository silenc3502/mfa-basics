import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoApp from "./components/TodoApp";

const App = () => (
  <div className="container">
    <div>Name: react-zustand-state</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <TodoApp />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
