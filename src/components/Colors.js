import React from "react";
import { useDispatch } from "react-redux";
import { colorChoice } from "../slices/colorSlice";
const Colors = () => {
  const dispatch = useDispatch();
  return (
    <div className="controls__colors" id="jsColors">
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#2C2C2C" }}
        onClick={() => {
          dispatch(colorChoice("#2C2C2C"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "white" }}
        onClick={() => {
          dispatch(colorChoice("white"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#FF3b00" }}
        onClick={() => {
          dispatch(colorChoice("#FF3b00"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#FF9500" }}
        onClick={() => {
          dispatch(colorChoice("#FF9500"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#FFCC00" }}
        onClick={() => {
          dispatch(colorChoice("#FFCC00"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#4CD963" }}
        onClick={() => {
          dispatch(colorChoice("#4CD963"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#5AC8FA" }}
        onClick={() => {
          dispatch(colorChoice("#5AC8FA"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#0579FF" }}
        onClick={() => {
          dispatch(colorChoice("#0579FF"));
        }}
      ></div>
      <div
        className="controls__color jsColor"
        style={{ backgroundColor: "#5856D6" }}
        onClick={() => {
          dispatch(colorChoice("#5856D6"));
        }}
      ></div>
    </div>
  );
};

export default Colors;
