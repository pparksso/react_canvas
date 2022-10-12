import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import modeSlice from "./slices/modeSlice";
import resetSlice from "./slices/resetSlice";

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
    mode: modeSlice.reducer,
    reset: resetSlice.reducer,
  },
});
export default store;
