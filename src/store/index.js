import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlide";
import { cartSlide } from "./cartSlide";
import { authenSlide } from "./authenSlide";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    cart: cartSlide.reducer,
    authen: authenSlide.reducer,
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const cartActions = cartSlide.actions;
export const authenActions = authenSlide.actions;
export default store;
