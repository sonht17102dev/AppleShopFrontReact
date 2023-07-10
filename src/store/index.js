import { configureStore, createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShow: false,
  },
  reducers: {
    showModal(state) {
      state.isOpen = true;
    },
    hideModal(state) {
      state.isOpen = false;
    },
  },
});
const amountSlide = createSlice({
  name: "amount",
  initialState: { amount: 1 },
  reducers: {
    increment(state) {
      state.amount++;
    },
    decrement(state) {
      if (state.amount <= 0) return;
      state.amount--;
    },
  },
});
const store = configureStore({
  reducer: { modal: modalSlice.reducer, amount: amountSlide.reducer },
});

export const { showModal, hideModal } = modalSlice.actions;
export const amountActions = amountSlide.actions;

export default store;
