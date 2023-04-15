import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initState = {
  tickets: [],
  ticket: {},
  isError: false,
  loading: true,
  success: false,
  message: "",
  singleLoading: false,
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

export const getTickets = createAsyncThunk(
  "tickets/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ticketService.getTickets(token);
    } catch (error) {
      console.log(error);
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

export const getTicket = createAsyncThunk(
  "tickets/getTicket",
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ticketService.getTicket(ticketId, token);
    } catch (error) {
      console.log(error);
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

export const updateStatus = createAsyncThunk(
  "tickets/updateTicket",
  async (ticketId, status, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ticketService.getTicket(ticketId, status, token);
    } catch (error) {
      console.log(error);
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
      })
      .addCase(getTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.loading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.isError = false;
        state.success = true;
        state.loading = false;
      })
      .addCase(getTicket.pending, (state) => {
        state.singleLoading = true;
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.singleLoading = true;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.ticket = action.payload;
        state.isError = false;
        state.success = true;
        state.singleLoading = false;
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
