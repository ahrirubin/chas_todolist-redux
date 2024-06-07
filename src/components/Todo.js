import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, isDone } from "../redux/todoSlice";

const Todo = ({todo }) => {
  const dispatch = useDispatch();
  // events
  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  
  };
  const completeHandler = () => {
    dispatch(isDone(todo.id));
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>{" "}
      </button>
    </div>
  );
};

export default Todo;
