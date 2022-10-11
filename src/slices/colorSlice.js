import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: { color: "#2C2C2C" },
  reducers: {
    colorChoice: (state, action) => {
      state.color = action.payload;
    },
  },
});
export default colorSlice;
export const { colorChoice } = colorSlice.actions;
