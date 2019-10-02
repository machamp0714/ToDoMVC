import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, todoToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} todoToggle={todoToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
