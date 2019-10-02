import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, todoToggle, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          todoToggle={todoToggle}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
