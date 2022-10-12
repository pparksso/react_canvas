import React, { useEffect, useState } from "react";
import Colors from "./Colors";
import { useDispatch } from "react-redux";
import { modeChoice } from "../slices/modeSlice";

const UtilBtn = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("Paint");
  const changeMode = () => {
    mode === "Paint" ? setMode("Fill") : setMode("Paint");
    return mode;
  };
  useEffect(() => {
    dispatch(modeChoice(mode));
  }, [mode]);
  return (
    <div className="controls">
      <div className="controls__range">
        <input type="range" id="jsRange" min="0.5" max="6.5" value="3.5" step="0.1" />
      </div>
      <div className="controls__btns">
        <button
          id="jsMode"
          onClick={() => {
            changeMode();
          }}
        >
          {mode}
        </button>
        <button id="jsSave">Save</button>
        <button id="jsReset">Reset</button>
      </div>
      <Colors />
    </div>
  );
};

export default UtilBtn;
