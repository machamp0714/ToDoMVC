import React from "react";
import PropTypes from "prop-types";
import VisibileTodoList from "../containers/VisibleTodoList";
import Footer from "../components/Footer";

const MainSection = ({ actions, todosCount, completedCount }) => (
  <section>
    {!!todosCount && (
      <span>
        <input
          id="all-toggle"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
          onChange={actions.allCompleteTodos}
        />
        <label htmlFor="all-toggle">all complete</label>
      </span>
    )}
    <VisibileTodoList />

    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        clearCompleted={actions.clearCompleted}
        activeCount={todosCount - completedCount}
      />
    )}
  </section>
);

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired
};

export default MainSection;
