import React from "react";
import "./selector.css";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory } from "../../redux/dataSlice";

function Selector() {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const category = [...new Set(data.map((v) => v.category))];

  return (
    <>
      <div className="selector">
        {/* <div className="cover">123</div> */}

        {category.map((v, i) => {
          return (
            <div key={i}>
              <div
                className="selector-item"
                onClick={() => {
                  dispatch(filterCategory(v));
                }}>
                {v}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Selector;
