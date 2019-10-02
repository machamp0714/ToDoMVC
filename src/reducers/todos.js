import { ADD_TODO, EDIT_TODO, TODO_TOGGLE } from "../constants/ActionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TODO_TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, text: action.text} : todo
      )
    default:
      return state;
  }
};

export default todos;
