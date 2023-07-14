import { createSlice } from "@reduxjs/toolkit";
export const modalSlice = createSlice({
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
