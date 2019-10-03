import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "../components/TodoList";
import * as TodoActions from "../actions/index";
import { getVisibleTodos } from "../selectors/index";

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
