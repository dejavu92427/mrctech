import React from "react";
import Selector from "./selector/Selector";
import List from "./list/List";

import "./container.css";

function Container() {
  return (
    <div className="container">
      <div className="container-selector">
        <Selector />
      </div>
      <div className="container-list">
        <List />
      </div>
    </div>
  );
}

export default Container;
