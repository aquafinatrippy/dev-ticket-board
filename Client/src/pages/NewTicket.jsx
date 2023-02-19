import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTicket } from "../features/tickets/ticketSlice";

export const NewTicket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket(formData));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { title, description } = formData;

  return (
    <>
      <Box>
        <Box>
          <h1>Create ticket</h1>
        </Box>
        <form onSubmit={(e) => onSubmit(e)}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              onChange={(e) => onChange(e)}
              value={title}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              onChange={(e) => onChange(e)}
              value={description}
            />
            <Button variant="contained" type="submit">
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};
