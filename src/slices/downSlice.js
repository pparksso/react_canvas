import { createSlice } from "@reduxjs/toolkit";

const downSlice = createSlice({
  name: "down",
  initialState: {
    url: "",
    save: false,
  },
  reducers: {
    canvasUrl: (state, action) => {
      state.url = action.payload;
    },
    saveImg: (state, action) => {
      state.save = action.payload;
    },
  },
});
export default downSlice;
export const { canvasUrl, saveImg } = downSlice.actions;
