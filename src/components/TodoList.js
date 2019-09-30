import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const todoList = todos.map((todo) => <Todo todo={todo} key={todo.id} />);

  return <ul>{todoList}</ul>;
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  };
};

export default connect(mapStateToProps)(TodoList);
