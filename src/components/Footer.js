import React from "react";
import FilterLink from "../containers/FilterLink";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../constants/TodoFilters";

const FILTERS_TITLE = {
  [SHOW_ALL]: "all",
  [SHOW_ACTIVE]: "active",
  [SHOW_COMPLETED]: "complete"
};

const Footer = (props) => {
  const { activeCount, completedCount, clearCompleted } = props;
  const itemWord = activeCount === 1 ? "item" : "items";

  return (
    <div>
      <span>Show: </span>

      {Object.keys(FILTERS_TITLE).map((title) => (
        <FilterLink key={title} filter={title}>
          {FILTERS_TITLE[title]}
        </FilterLink>
      ))}

      <div className="count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </div>

      {!!completedCount && (
        <button onClick={clearCompleted}>clear completed</button>
      )}
    </div>
  );
};

export default Footer;
