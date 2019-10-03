import {
  ADD_TODO,
  EDIT_TODO,
  TODO_TOGGLE,
  DELETE_TODO,
  CLEAR_COMPLETED,
  ALL_COMPLETE
} from "../constants/ActionTypes";

const initState = [
  {
    id: 0,
    text: "Sample",
    completed: false
  }
];

const todos = (state = initState, action) => {
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
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
    case ALL_COMPLETE:
      return state.map((todo) => ({ ...todo, completed: !todo.completed }));
    default:
      return state;
  }
};

export default todos;
