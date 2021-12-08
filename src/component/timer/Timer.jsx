import React, { useState, useEffect } from "react";
import "./timer.css";

function Timer() {
  const [time, settime] = useState(86399);
  useEffect(() => {
    //1sec 跳一次修改now的時間
    setInterval(() => {}, 1000);
  }, []);
  return (
    <>
      <div className="timer">
        倒數：{time / 3600}:{time / 1440 == 60 ? "00" : time / 1440}:{time % 86400}
      </div>
    </>
  );
}

export default Timer;
