import React from "react";
import FilterLink from "../containers/FilterLink";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../constants/TodoFilters";

const Footer = ({ todosCount, completedCount, clearCompleted }) => (
  <div>
    <span>Show: </span>
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>Complete</FilterLink>
    <div className="count">
      {todosCount === completedCount ? "No" : todosCount - completedCount} items
      left
    </div>
    {completedCount > 0 ? (
      <button onClick={() => clearCompleted()} className="all-completed">
        clear completed
      </button>
    ) : null}
  </div>
);

export default Footer;
