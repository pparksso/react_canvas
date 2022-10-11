import React from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const color = useSelector((state) => {
    return state.color.color;
  });
  const textColor = useSelector((state) => {
    if (state.color.color === "white") {
      return "#2C2C2C";
    }
  });
  return (
    <div className="status__box">
      <div id="color__status" className="color__preview" style={{ backgroundColor: color, color: textColor }}>
        PAINT
      </div>
      <canvas id="line__canvas" className="line__status"></canvas>
    </div>
  );
};

export default Preview;
