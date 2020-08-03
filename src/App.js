import React from "react";
import "./App.css";
import Todo from "./Todo";
import todoImg from "./check_mark_button.gif";

function App() {
  return (
    <div className="app">
      <Todo todoPic={todoImg} />
    </div>
  );
}

export default App;
