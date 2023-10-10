import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    unsetUser: (state) => {
      state.user = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    unsetToken: (state) => {
      state.token = null;
    },
  },
});

export const { setUser, unsetUser, setToken, unsetToken } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.token;

export default userSlice.reducer;
