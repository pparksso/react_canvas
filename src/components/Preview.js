import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const lineRef = useRef(null);
  const range = useSelector((state) => {
    return state.range.value;
  });
  const color = useSelector((state) => {
    return state.color.color;
  });
  const textColor = useSelector((state) => {
    if (state.color.color === "white") {
      return "#2C2C2C";
    }
  });
  const mode = useSelector((state) => {
    return state.mode.mode;
  });

  // 선 굵기 예시
  useEffect(() => {
    const lineCanvas = lineRef.current;
    lineCanvas.width = 100;
    lineCanvas.height = 100;
    const ctx = lineCanvas.getContext("2d");
    ctx.lineWidth = range;
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(25, 50);
    ctx.lineTo(75, 50);
    ctx.stroke();
  }, [range]);

  return (
    <div className="status__box">
      <div id="color__status" className="color__preview" style={{ backgroundColor: color, color: textColor }}>
        {mode}
      </div>
      <canvas id="line__canvas" className="line__status" ref={lineRef}></canvas>
    </div>
  );
};

export default Preview;
