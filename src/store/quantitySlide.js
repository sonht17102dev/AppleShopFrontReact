import { createSlice } from "@reduxjs/toolkit";
export const quantitySlide = createSlice({
  name: "quantity",
  initialState: { quantity: 0 },
  reducers: {
    increment(state) {
      state.quantity++;
    },
    decrement(state) {
      if (state.quantity <= 0) return;
      state.quantity--;
    },
  },
});
