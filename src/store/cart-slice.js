import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalAmount =
        state.totalAmount +
        (newItem.price - (newItem.price * newItem.discount) / 100);
      if (!existingItem) {
        if (+state.totalQuantity === 0) {
          state.totalQuantity++;
          state.changed = true;
          state.items.push({
            dishName: newItem.dishName,
            _id: newItem._id,
            price: newItem.price,
            totalPrice: newItem.price,
            url: newItem.url,
            quantity: 1,
            discount: newItem.discount,
            restaurent: newItem.restaurent,
          });
        } else {
          const hotel = newItem.restaurent;
          if (state.items[0].restaurent === hotel) {
            state.totalQuantity++;
            state.changed = true;
            state.items.push({
              dishName: newItem.dishName,
              _id: newItem._id,
              price: newItem.price,
              url: newItem.url,
              totalPrice: newItem.price,
              quantity: 1,
              discount: newItem.discount,
              restaurent: newItem.restaurent,
            });
          } else {
            state.totalAmount =
              state.totalAmount -
              (newItem.price - (newItem.price * newItem.discount) / 100);
            alert("Please Add Items from one Restaurent at a Time");
          }
        }
      } else {
        state.totalQuantity++;
        state.changed = true;
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const _id = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== _id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalAmount =
        state.totalAmount -
        (existingItem.price -
          (existingItem.price * existingItem.discount) / 100);
    },
    clearBag(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.changed = true;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;
