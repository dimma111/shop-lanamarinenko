import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  firstName: "",
  lastName: "",
  phone: "",
  country: "",
  city: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.phone = payload.phone;
      state.country = payload.country;
      state.city = payload.city;
      state.email = payload.email;
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "";
      state.firstName = "";
      state.lastName = "";
      state.phone = "";
      state.country = "";
      state.city = "";
      state.email = "";
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail, logout } = actions;
export default reducer;
