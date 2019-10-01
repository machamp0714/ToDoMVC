import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { todoToggle } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  todoToggle: (id) => dispatch(todoToggle(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
