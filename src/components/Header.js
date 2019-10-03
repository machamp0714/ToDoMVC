import React from "react";
import TodoTextInput from "./TodoTextInput";

const Header = ({ addTodo }) => (
  <div className="todo">
    <h1>Todo App with Redux</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="New Todo"
    />
  </div>
);

export default Header;
