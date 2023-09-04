import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Login,
} from "./loginCrud";

export const userLogin = createAsyncThunk(
  "Login/userLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await Login(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    userInfo: {},
    userToken:"",
    isAuthenticated:false,
    isLoading: false,
    error: "",
  },
  reducers: {
  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo = action?.payload?.data;
      state.isAuthenticated = action?.payload?.data?.accessToken?true:false
      localStorage.setItem("token", action?.payload?.data?.accessToken);
      state.userToken = action?.payload?.data?.accessToken
      state.error = null;
    },
    [userLogin.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    /* 
    handling forgot password
    */

  },
});

export const {  } = LoginSlice.actions;
export default LoginSlice.reducer;
