import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import mealsSlice from "./meals-slice";
import checkoutSlice from "./checkout-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    meals: mealsSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});

export default store;
