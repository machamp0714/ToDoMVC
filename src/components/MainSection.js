import React from "react";
import VisibileTodoList from "../containers/VisibleTodoList";
import Footer from "../components/Footer";

const MainSection = ({ actions, todosCount, completedCount }) => (
  <section>
    <VisibileTodoList />
    <Footer />
  </section>
);

export default MainSection;
