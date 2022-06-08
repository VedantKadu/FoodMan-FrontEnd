import { createSlice } from "@reduxjs/toolkit";

const AccountModalSlice = createSlice({
  name: "Account Modal",
  initialState: {
    view: false,
  },
  reducers: {
    setView(state) {
      state.view = !state.view;
    },
  },
});
export const accountModalActions = AccountModalSlice.actions;
export default AccountModalSlice;
