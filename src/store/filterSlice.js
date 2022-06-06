import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: { word: "", veg: false } },
  reducers: {
    changeVeg(state, action) {
      state.filter.veg = action.payload.veg;
    },
    changeWord(state, action) {
      state.filter.word = action.payload.word;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
