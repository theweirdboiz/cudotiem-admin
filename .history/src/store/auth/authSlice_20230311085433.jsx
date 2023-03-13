import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
