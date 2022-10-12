import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";
import modeSlice from "./slices/modeSlice";

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
    mode: modeSlice.reducer,
  },
});
export default store;
