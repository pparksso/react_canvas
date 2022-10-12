import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: { mode: "paint" },
  reducers: {
    modeChoice: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export default modeSlice;
export const { modeChoice } = modeSlice.actions;
