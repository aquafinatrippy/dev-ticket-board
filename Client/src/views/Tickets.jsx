import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import { TicketCard } from "../components/TicketCard";

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

  return (
    <div>
      {tickets.map(({ title, description, _id }) => (
        <TicketCard key={_id} title={title} description={description} />
      ))}
    </div>
  );
};
