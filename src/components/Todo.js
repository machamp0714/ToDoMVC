import React from "react";

const Todo = ({ id, text, completed, todoToggle }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
    onClick={() => todoToggle(id)}
  >
    {id}:{text}
  </li>
);

export default Todo;
