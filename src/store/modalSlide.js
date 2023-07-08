import { createSlice } from "@reduxjs/toolkit";
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

export default modalSlice;
