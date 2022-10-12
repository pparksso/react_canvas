import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  initialState: { reset: false },
  reducers: {
    reset: (state, action) => {
      // console.log(action.payload);
      state.reset = action.payload;
    },
  },
});

export default resetSlice;
export const { reset } = resetSlice.actions;
