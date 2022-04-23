import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import loginSlice from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    cart: cartSlice,
  },
});
