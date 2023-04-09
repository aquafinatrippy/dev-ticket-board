import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import { TicketCard } from "../components/TicketCard";
import { Grid } from "@mui/material";

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

  const drag = (e, id) => {
    console.log(e, id);
    e.dataTransfer.setData("text", id);
  };
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const drop = (e) => {
    e.preventDefault();
    console.log(e);
  };

  if (loading) return <p>loading</p>;

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={3}
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        {tickets.map(({ title, description, _id }) => (
          <TicketCard
            onDragStart={(e) => drag(e, _id)}
            key={_id}
            id={_id}
            title={title}
            description={description}
          />
        ))}
      </Grid>
      <Grid
        item
        xs={3}
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        <p>xs=3</p>
      </Grid>
      <Grid
        item
        xs={3}
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        <p>xs=3</p>
      </Grid>
      <Grid
        item
        xs={3}
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        <p>xs=4</p>
      </Grid>
    </Grid>
  );
};
