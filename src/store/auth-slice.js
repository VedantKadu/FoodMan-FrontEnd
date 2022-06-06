import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: false,
    customer: false,
  },
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload.loggedIn;
      state.customer = action.payload.customer;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
