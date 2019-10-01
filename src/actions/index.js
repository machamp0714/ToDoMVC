let nextId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextId++,
  text
});

export const todoToggle = (id) => ({
  type: "TODO_TOGGLE",
  id
});
