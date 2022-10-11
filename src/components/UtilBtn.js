import React from "react";
import Colors from "./Colors";

const UtilBtn = () => {
  return (
    <div className="controls">
      <div className="controls__range">
        <input type="range" id="jsRange" min="0.5" max="6.5" value="3.5" step="0.1" />
      </div>
      <div className="controls__btns">
        <button id="jsMode">Paint</button>
        <button id="jsSave">Save</button>
        <button id="jsReset">Reset</button>
      </div>
      <Colors />
    </div>
  );
};

export default UtilBtn;
