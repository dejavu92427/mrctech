import React from "react";
import "./app.css";
import GoTop from "./component/goTop/GoTop";

import Search from "./component/search/Search";

import Slider from "./component/slider/Slider";
import Timer from "./component/timer/Timer";
import Container from "./container/container/Container";
function App() {
  return (
    <div className="mrctech">
      <div className="mrctech-left">
        <Search />
        <Slider />
        <Timer />
        <Container />
      </div>
      <div className="mrctech-right">
        <GoTop />
      </div>
    </div>
  );
}

export default App;
