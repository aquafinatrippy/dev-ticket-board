import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/authSlice";
import TicketReducer from "../features/tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    ticket: TicketReducer,
  },
});
