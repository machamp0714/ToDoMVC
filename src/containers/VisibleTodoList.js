import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "../components/TodoList";
import * as TodoActions from "../actions/index";
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
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
