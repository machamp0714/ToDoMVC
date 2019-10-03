import {
  ADD_TODO,
  EDIT_TODO,
  TODO_TOGGLE,
  SET_FILTER,
  DELETE_TODO
} from "../constants/ActionTypes";

let nextId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

export const todoToggle = (id) => ({
  type: TODO_TOGGLE,
  id
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});
