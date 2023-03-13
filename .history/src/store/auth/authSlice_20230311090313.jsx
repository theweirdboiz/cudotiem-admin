import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { login, register } = authSlice.actions;

export default authSlice.reducer;
