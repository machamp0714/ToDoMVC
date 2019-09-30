const initState = {
  todos: [{ id: 0, text: "sample todo", completed: false }]
};

const todos = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
