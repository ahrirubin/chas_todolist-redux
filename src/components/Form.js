import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";


const Form = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const inputTextHandler = (e) => {
      setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: inputText,
          completed: false,
        })
      );
      setInputText("");
    }
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
