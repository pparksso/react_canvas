import React from "react";

const Preview = () => {
  return (
    <div className="status__box">
      <div id="color__status" className="color__preview">
        PAINT
      </div>
      <canvas id="line__canvas" className="line__status"></canvas>
    </div>
  );
};

export default Preview;
