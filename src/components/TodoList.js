import React from "react";
import PropTypes from "prop-types";
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoList;
