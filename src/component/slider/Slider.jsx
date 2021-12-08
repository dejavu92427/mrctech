import React, { useState } from "react";
import "./slider.css";

import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

function Slider() {
  const img = [
    "https://picsum.photos/id/237/1200/500",
    "https://picsum.photos/id/238/1200/500",
    "https://picsum.photos/id/239/1200/500",
    "https://picsum.photos/id/240/1200/500",
    "https://picsum.photos/id/241/1200/500",
    "https://picsum.photos/id/242/1200/500",
    "https://picsum.photos/id/243/1200/500",
    "https://picsum.photos/id/244/1200/500",
    "https://picsum.photos/id/247/1200/500",
    "https://picsum.photos/id/248/1200/500",
  ];

  const [imgIndex, setimgIndex] = useState(3);

  return (
    <>
      <div className="slider">
        <div className="slider-container">
          {<img src={img[imgIndex]} alt="" />}
          <div
            className="slider-pointer slider-leftbutton"
            onClick={() => {
              setimgIndex(imgIndex - 1 < 0 ? 0 : imgIndex - 1);
            }}>
            <BsChevronCompactLeft className="slider-directionbutton" />
          </div>
          <div
            className="slider-pointer slider-rightbutton"
            onClick={() => {
              setimgIndex(imgIndex + 1 < img.length ? imgIndex + 1 : 9);
            }}>
            <BsChevronCompactRight className="slider-directionbutton" />
          </div>
          <div className="slider-circle">
            {img.map((v, i) => {
              return (
                <div
                  className={"slider-pointer slider-circle-item" + (imgIndex === i ? " active" : "")}
                  key={i}
                  onClick={() => {
                    setimgIndex(i);
                  }}></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
