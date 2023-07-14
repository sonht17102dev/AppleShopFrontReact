import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlide";
import { quantitySlide } from "./quantitySlide";
import { cartSlide } from "./cartSlide";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    quantity: quantitySlide.reducer,
    cart: cartSlide.reducer,
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const quantityActions = quantitySlide.actions;
export const cartActions = cartSlide.actions;
export default store;
