import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalAmount: 0,
  isCheckOut: false,
  cartButtonIsHighlighted: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.totalAmount = state.totalAmount + action.payload.amount;
      state.totalPrice =
        state.totalPrice + action.payload.price * action.payload.amount;
      const exisitingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exisitingItemIndex !== -1) {
        const updatedItem = { ...state.cartItems[exisitingItemIndex] };
        updatedItem.amount = updatedItem.amount + action.payload.amount;
        const updatedItems = state.cartItems.slice();
        updatedItems[exisitingItemIndex] = updatedItem;
        state.cartItems = updatedItems;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const exisitingItem = state.cartItems.find((item) => item.id === id);
      state.totalPrice = state.totalPrice - exisitingItem.price;
      state.totalAmount--;
      if (exisitingItem.amount > 1) {
        exisitingItem.amount--;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    checkOut(state) {
      state.isCheckOut = !state.isCheckOut;
    },
    highlightButton(state) {
      state.cartButtonIsHighlighted = !state.cartButtonIsHighlighted;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
