import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, todoToggle, editTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          todoToggle={todoToggle}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
