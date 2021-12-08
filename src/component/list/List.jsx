import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./list.css";

import Item from "./item/Item";

function List() {
  const data = useSelector((state) => state.data.newData);
  const [popup, setpopup] = useState(false);
  const [itemId, setitemId] = useState("");

  return (
    <>
      <div className="list">
        {data.map((v, i) => {
          return (
            <div
              key={i}
              className="list-item"
              onClick={() => {
                setpopup(true);
                setitemId(v.id);
              }}>
              <img src={v.images.icon} alt="" />
              <div style={{ textAlign: "center" }}>{v.name}</div>
            </div>
          );
        })}
        {/* ==================popup================== */}
        {popup && (
          <Item
            onHide={() => {
              setpopup(false);
            }}
            itemId={itemId}
          />
        )}
      </div>
    </>
  );
}

export default List;
