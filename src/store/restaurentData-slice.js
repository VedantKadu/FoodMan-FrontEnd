import { createSlice } from "@reduxjs/toolkit";

const RestaurentDataSlice = createSlice({
  name: "data",
  initialState: { hotels: [] },
  reducers: {
    changeData(state, action) {
      state.hotels = action.payload;
    },
  },
});

export const RestaurentDataActions = RestaurentDataSlice.actions;
export default RestaurentDataSlice;
