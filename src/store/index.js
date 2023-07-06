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
const store = configureStore({
  reducer: { modal: modalSlice.reducer },
});

export const { showModal, hideModal } = modalSlice.actions;

export default store;
