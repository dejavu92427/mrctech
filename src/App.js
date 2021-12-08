import React from "react";
import "./app.css";

import Search from "./component/search/Search";
import Slider from "./component/slider/Slider";
function App() {
  return (
    <>
      <div className="test-app">
        <Search />
        <Slider />
      </div>
    </>
  );
}

export default App;
