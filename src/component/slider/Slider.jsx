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

  const [imgIndex, setimgIndex] = useState(0);

  return (
    <>
      <div className="slider">
        <div className="slider-container">
          {<img src={img[imgIndex]} alt="" />}
          <div className="slider-leftbutton">
            <BsChevronCompactLeft
              className="slider-directionbutton"
              onClick={() => {
                setimgIndex(imgIndex - 1 < 0 ? 0 : imgIndex - 1);
              }}
            />
          </div>
          <div className="slider-rightbutton">
            <BsChevronCompactRight
              className="slider-directionbutton"
              onClick={() => {
                setimgIndex(imgIndex + 1 < img.length ? imgIndex + 1 : 9);
              }}
            />
          </div>
          <div className="slider-circle">
            {img.map((v, i) => {
              return (
                <>
                  <label
                    htmlFor={`circle-${i}`}
                    onClick={() => {
                      setimgIndex(i);
                    }}>
                    <div className="slider-circle-item" id={`circle-${i}`}></div>
                  </label>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
