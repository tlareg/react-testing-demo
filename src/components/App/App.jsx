import React from "react";
import { TodoList } from "root/components/TodoList";
import './App.css';

const App = () => (
  <div className="App">
    <h1>React Testing Demo</h1>
    <h2>TODO:</h2>
    <TodoList />
  </div>
);

export { App };
