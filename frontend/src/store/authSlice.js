import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState, // Typo: should be "initialState," not "intialState,"
  reducers: {
    login: (state, action) => {
      state.status = true; // Fixed the parentheses and assignment
      state.userData = action.payload.data;
    },
    logout: (state, action) => {
      state.status = false; // Fixed the parentheses and assignment
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
