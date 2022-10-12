import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Preview from "./Preview";
import { reset } from "../slices/resetSlice";
import { canvasUrl, saveImg } from "../slices/downSlice";

const Canvas = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const [pencil, setPencil] = useState(false);
  const [penColor, setPenColor] = useState("#000");
  const [ctx, setCtx] = useState(null);

  // 색 가져오기
  const fillColor = useSelector((state) => {
    return state.color.color;
  });

  // 모드 가져오기
  const getMode = useSelector((state) => {
    return state.mode.mode;
  });

  // 리셋 클릭 이벤트 가져오기
  const getReset = useSelector((state) => {
    return state.reset.reset;
  });

  // canvas 주소 보내기
  useEffect(() => {
    if (saveImg) {
      dispatch(canvasUrl(canvasRef.current.toDataURL("image/png")));
      dispatch(saveImg(false));
    }
  });

  // 모드와 색이 바뀔 때 마다 canvas의 배경, 펜 색 바뀌게하는 함수
  // canvas의 backgroundColor를 바꾸는 걸로 했었는데 배경색이 다운이 안되서 fillStyle로 변경 -> 배경을 바꿀 때 마다 리셋되는 문제 있음
  useEffect(() => {
    if (getMode === "Fill") {
      ctx.fillStyle = fillColor;
      ctx.fillRect(0, 0, 700, 700);
    } else {
      setPenColor(fillColor);
    }
  }, [getMode, fillColor]);

  // canvas 기본 세팅
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 700;
    setCtx(canvas.getContext("2d"));
  }, []);

  // canvas에 그림그리는 함수
  const draw = (e) => {
    const X = e.nativeEvent.offsetX;
    const Y = e.nativeEvent.offsetY;
    ctx.lineWidth = 1;
    ctx.strokeStyle = penColor;
    if (!pencil) {
      ctx.beginPath();
      ctx.moveTo(X, Y);
    } else {
      ctx.lineTo(X, Y);
      ctx.stroke();
    }
  };

  // 캔버스 reset
  useEffect(() => {
    if (getReset) {
      ctx.clearRect(0, 0, 700, 700);
      dispatch(reset(false));
    }
  }, [getReset]);

  return (
    <div className="canvas-wrap">
      <canvas id="jsCanvas" className="canvas" ref={canvasRef} onMouseDown={() => setPencil(true)} onMouseUp={() => setPencil(false)} onMouseMove={draw} onMouseLeave={() => setPencil(false)}></canvas>
      <Preview />
    </div>
  );
};

export default Canvas;
