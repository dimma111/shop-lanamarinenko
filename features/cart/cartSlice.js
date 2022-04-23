import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart", //имя редьюсера
  initialState, //начальное состояние
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.cartTotalQuantity++;
    },
    deleteFromCart(state, action) {
      // state.cartItems.push(action.payload);
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
      state.cartTotalQuantity--;
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
