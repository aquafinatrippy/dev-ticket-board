import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";

export const NewTicket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { loading, isError, success, message } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (success) {
      dispatch(reset());
      navigate("/tickets");
    }
    dispatch(reset());
  }, [dispatch, isError, success, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("xx");
    dispatch(
      createTicket({
        project: formData.title,
        description: formData.description,
      })
    );
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { title, description } = formData;
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <>
      <BackButton url={"/"} />
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
