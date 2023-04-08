import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initState = {
  tickets: [],
  ticket: {},
  isError: false,
  loading: true,
  success: false,
  message: "",
};

export const createTicket = createAsyncThunk(
  "ticket/create",
  async (ticket, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ticketService.create(ticket, token);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: initState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.loading = true;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.tickets.push(action.payload);
        state.isError = false;
        state.success = true;
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
