import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
  user: null,
  error: false,
  success: false,
  loading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer