import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTickets,
  reset,
  updateStatus,
} from "../features/tickets/ticketSlice";
import { TicketCard } from "../components/TicketCard";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { resetUser } from "../features/auth/authSlice";

export const Tickets = () => {
  const { tickets, loading, success, isError } = useSelector(
    (state) => state.tickets
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (success) {
        dispatch(reset());
      }
      if (isError && success) {
        dispatch(resetUser());
      }
    };
  }, [dispatch, success, isError]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  const drag = (e, id) => {
    console.log(id, "state");
    e.dataTransfer.setData("ticket_id", id);
  };
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const drop = (e, where) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("ticket_id");
    console.log(e.dataTransfer.getData("ticket_id"));
    dispatch(updateStatus({ ticketId: id, status: where }));
    e.target.appendChild(document.getElementById(id));
  };

  if (loading) return <p>loading</p>;

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={3}
        onDrop={(e) => drop(e, "To do")}
        onDragOver={(e) => allowDrop(e)}
      >
        <Card>
          <CardContent>
            <Typography>To do</Typography>
          </CardContent>
        </Card>
        {tickets
          .filter(({ status }) => status === "New")
          .map(({ title, description, _id }) => (
            <TicketCard
              dragStart={(e) => drag(e, _id)}
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
        onDrop={(e) => drop(e, "On progress")}
        onDragOver={(e) => allowDrop(e)}
      >
        <Card>
          <CardContent>
            <Typography>On progress</Typography>
          </CardContent>
        </Card>
        {tickets
          .filter(({ status }) => status === "On progress")
          .map(({ title, description, _id }) => (
            <TicketCard
              dragStart={(e) => drag(e, _id)}
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
        onDrop={(e) => drop(e, "Done")}
        onDragOver={(e) => allowDrop(e)}
      >
        <Card>
          <CardContent>
            <Typography>Done</Typography>
          </CardContent>
        </Card>
        {tickets
          .filter(({ status }) => status === "Done")
          .map(({ title, description, _id }) => (
            <TicketCard
              dragStart={(e) => drag(e, _id)}
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
        onDrop={(e) => drop(e, "On hold")}
        onDragOver={(e) => allowDrop(e)}
      >
        <Card>
          <CardContent>
            <Typography>On Hold</Typography>
          </CardContent>
        </Card>
        {tickets
          .filter(({ status }) => status === "On hold")
          .map(({ title, description, _id }) => (
            <TicketCard
              dragStart={(e) => drag(e, _id)}
              key={_id}
              id={_id}
              title={title}
              description={description}
            />
          ))}
      </Grid>
    </Grid>
  );
};
