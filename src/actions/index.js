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

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  filter
});

export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
