import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  initialState: { reset: false },
  reducers: {
    reset: (state, action) => {
      state.reset = action.payload;
    },
  },
});

export default resetSlice;
export const { reset } = resetSlice.actions;
