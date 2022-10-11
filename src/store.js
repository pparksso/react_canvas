import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./slices/colorSlice";

const store = configureStore({
  reducer: {
    color: colorSlice.reducer,
  },
});
export default store;
