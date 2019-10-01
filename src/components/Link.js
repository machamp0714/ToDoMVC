import React from "react";

const Link = ({ onClick, active, filter, children }) => (
  <button disabled={active} onClick={() => onClick(filter)}>
    {children}
  </button>
);

export default Link;
