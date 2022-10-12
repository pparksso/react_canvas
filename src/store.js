import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import modeSlice from "./slices/modeSlice";
import resetSlice from "./slices/resetSlice";
import downSlice from "./slices/downSlice";
import rangeSlice from "./slices/rangeSlice";

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
    mode: modeSlice.reducer,
    reset: resetSlice.reducer,
    down: downSlice.reducer,
    range: rangeSlice.reducer,
  },
});
export default store;
