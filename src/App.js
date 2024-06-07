import React, { useState } from "react";
import "./App.css";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {
  const [inputText, setInputText] = useState("");
  const todos = useSelector((state) => state.todo.list);

  return (
    <div className="App">
      <header>
        <h1>Your To-do List</h1>
      </header>
      <Form
       
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
