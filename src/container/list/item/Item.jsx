import React from "react";
import { useSelector } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";

import "./item.css";

function Item({ itemId, onHide }) {
  const data = useSelector((state) => state.data.newData);
  const item = data.filter((v) => v.id === itemId)[0];
  console.log(item);

  return (
    <>
      <div className="item">
        <div className="item-cover" onClick={onHide}></div>
        <div className="item-container">
          <div className="item-title">
            <h1>ICON</h1>

            <FaRegWindowClose className="item-title-close" onClick={onHide} />
          </div>
          <div className="item-line"></div>
          <div className="item-detail">
            <div className="item-detail-text">
              <h2>{item.name}</h2>
              <h3>{item.category}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-detail-img">
              <img src={item.images.icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
