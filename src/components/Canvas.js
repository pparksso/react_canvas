import React, { useEffect, useRef, useState } from "react";
import Preview from "./Preview";

const Canvas = () => {
  return (
    <div className="canvas-wrap">
      <canvas id="jsCanvas" className="canvas"></canvas>
      <Preview />
    </div>
  );
};

export default Canvas;
