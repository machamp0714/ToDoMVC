import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { todoToggle, editTodo } from "../actions/index";
import { visibilityFilters } from "../actions/index";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => todo.completed === false);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed === true);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => ({
  todoToggle: (id) => dispatch(todoToggle(id)),
  editTodo: (id, text) => dispatch(editTodo(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
