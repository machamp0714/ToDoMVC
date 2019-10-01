import React from "react";
import FilterLink from "../containers/FilterLink";
import { visibilityFilters } from "../actions/index";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Complete</FilterLink>
  </div>
);

export default Footer;
