import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { timer } from "../../redux/dataSlice";
import "./timer.css";

function Timer() {
  const time = useSelector((state) => state.data.time);
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch(timer());
    }, 1000);
  }, []);

  return (
    <>
      <div className="timer">
        倒數：{parseInt((time / 3600) % 24) > 9 ? parseInt((time / 3600) % 24) : "0" + parseInt((time / 3600) % 24)}:
        {parseInt((time / 60) % 60) > 9 ? parseInt((time / 60) % 60) : "0" + parseInt((time / 60) % 60)}:
        {time % 60 > 9 ? time % 60 : "0" + (time % 60)}
      </div>
    </>
  );
}

export default Timer;
