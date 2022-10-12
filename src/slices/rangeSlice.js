import { createSlice } from "@reduxjs/toolkit";

const rangeSlice = createSlice({
  name: "range",
  initialState: {
    value: 3.5,
  },
  reducers: {
    changeRange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default rangeSlice;
export const { changeRange } = rangeSlice.actions;
