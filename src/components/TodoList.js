import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} todoToggle={todoToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
