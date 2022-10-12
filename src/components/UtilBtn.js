import React, { useEffect, useState } from "react";
import Colors from "./Colors";
import { useDispatch, useSelector } from "react-redux";
import { modeChoice } from "../slices/modeSlice";
import { reset } from "../slices/resetSlice";

const UtilBtn = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("Paint");

  // canvas url
  const url = useSelector((state) => {
    return state.down.url;
  });

  // 클릭 시 mode 바꾸는 함수
  const changeMode = () => {
    mode === "Paint" ? setMode("Fill") : setMode("Paint");
    return mode;
  };

  // 바뀐 함수 값 redux로 보내기(useState가 비동기로 작동해 mode가 비뀌고 나서 전송되게 하기위해 useEffect 사용)
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
        <a href={url} download="canvas.png" id="jsSave">
          Save
        </a>
        <button
          id="jsReset"
          onClick={() => {
            dispatch(reset(true));
          }}
        >
          Reset
        </button>
      </div>
      <Colors />
    </div>
  );
};

export default UtilBtn;
