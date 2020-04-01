import React from "react";
import "./section.css";

function Section(props) {
  return (
    <div className="Section">
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
}

export default Section;
