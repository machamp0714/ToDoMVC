import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, actions }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

export default TodoList;
