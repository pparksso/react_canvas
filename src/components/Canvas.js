import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Preview from "./Preview";
import { reset } from "../slices/resetSlice";

const Canvas = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const [pencil, setPencil] = useState(false);
  const [bg, setBg] = useState("#fff");
  const [penColor, setPenColor] = useState("#000");
  const [ctx, setCtx] = useState(null);
  const [clear, setClear] = useState(false);

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

  // 클릭이벤트 다시 false로 만들기
  useEffect(() => {
    dispatch(reset(false));
  }, [clear]);

  // 모드와 색이 바뀔 때 마다 canvas의 배경, 펜 색 바뀌게하는 함수
  useEffect(() => {
    if (getMode === "Fill") {
      setBg(fillColor);
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

  // 캔버스 reset(clearRect()가 안되서 캔버스를 새로 생성)
  useEffect(() => {
    setClear(getReset);
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 700;
    setCtx(canvas.getContext("2d"));
    setBg("#fff");
  }, [getReset]);

  return (
    <div className="canvas-wrap">
      <canvas
        id="jsCanvas"
        className="canvas"
        ref={canvasRef}
        style={{ backgroundColor: bg }}
        onMouseDown={() => setPencil(true)}
        onMouseUp={() => setPencil(false)}
        onMouseMove={draw}
        onMouseLeave={() => setPencil(false)}
      ></canvas>
      <Preview />
    </div>
  );
};

export default Canvas;
