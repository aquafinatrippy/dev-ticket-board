import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";

export const Tickets = () => {
  const { tickets, loading, success } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (success) {
        dispatch(reset());
      }
    };
  }, [dispatch, success]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (loading) return <p>loading</p>;

  return <div>Tickets</div>;
};
