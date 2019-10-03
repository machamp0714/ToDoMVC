import React from "react";
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

export default MainSection;
