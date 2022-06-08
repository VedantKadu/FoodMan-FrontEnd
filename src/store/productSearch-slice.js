import { createSlice } from "@reduxjs/toolkit";

const productSearchSlice = createSlice({
  name: "search Product item",
  initialState: {
    enteredWord: "",
    filteredData: [],
    searchData: [],
    reload: false,
  },
  reducers: {
    setEnteredWord(state, action) {
      state.enteredWord = action.payload;
    },
    changeFilteredData(state, action) {
      state.filteredData = action.payload;
    },
    changeSearchData(state, action) {
      state.searchData = action.payload;
    },
    changeReload(state, action) {
      state.reload = !state.reload;
    },
  },
});
export const productSearchActions = productSearchSlice.actions;
export default productSearchSlice;
