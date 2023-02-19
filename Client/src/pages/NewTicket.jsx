import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const NewTicket = () => {
  const [formData, setFormData] = useState({
    title: "",
    project: "",
    description: "",
  });

  const { user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { title, project, description } = formData;

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
              id="project"
              label="Project name"
              variant="outlined"
              onChange={(e) => onChange(e)}
              value={project}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              onChange={(e) => onChange(e)}
              value={description}
            />
            <Button variant="contained">Create</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};
