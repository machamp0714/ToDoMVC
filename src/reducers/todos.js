const initState = {
  todos: [{ id: 0, text: "sample todo", completed: false }]
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todos;
