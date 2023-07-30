import { createSlice } from "@reduxjs/toolkit";

const initialAuthenState = {
  isAuthenticated: false,
  currentUser: null,
};

export const authenSlide = createSlice({
  name: "authentication",
  initialState: initialAuthenState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});
