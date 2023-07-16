import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlide";
import { cartSlide } from "./cartSlide";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartSlide.reducer,
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const cartActions = cartSlide.actions;
export default store;
