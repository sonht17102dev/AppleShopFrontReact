import { createSlice } from "@reduxjs/toolkit";
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShow: false,
  },
  reducers: {
    // Hàm xử lý hiển thị modal
    showModal(state) {
      state.isOpen = true;
    },
    // Hàm xử lý ẩn modal
    hideModal(state) {
      state.isOpen = false;
    },
  },
});
