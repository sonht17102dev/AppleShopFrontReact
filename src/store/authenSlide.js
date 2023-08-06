import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo giá trị ban đầu cho authen store
const initialAuthenState = {
  isAuthenticated: false,
  currentUser: null,
};

export const authenSlide = createSlice({
  name: "authentication",
  initialState: initialAuthenState,
  reducers: {
    // Hàm login xử lý khi người dùng login thành công
    login(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    // Hàm logout xử lý khi người dùng logout thành công
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});
