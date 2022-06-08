import { createSlice } from "@reduxjs/toolkit";

const CustomerAccountModalSlice = createSlice({
  name: "Customer Account Modal",
  initialState: {
    view: false,
  },
  reducers: {
    setView(state) {
      state.view = !state.view;
    },
  },
});
export const customeraccountModalActions = CustomerAccountModalSlice.actions;
export default CustomerAccountModalSlice;
