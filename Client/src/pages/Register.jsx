import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { toast } from "react-toastify";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { name, email, password, password2 } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2 || password2 !== password) {
      toast.error("Passwords dont match");
    }
  };

  return (
    <div>
      <Typography>Register</Typography>
      <Typography>Please create an account</Typography>

      <form onSubmit={(e) => onSubmit(e)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <TextField
            onChange={(e) => onChange(e)}
            value={name}
            id="name"
            label="Enter your name"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={(e) => onChange(e)}
            value={email}
            id="email"
            label="Enter email"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={(e) => onChange(e)}
            value={password}
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
          <TextField
            onChange={(e) => onChange(e)}
            value={password2}
            id="password2"
            label="ConfirmPassword"
            variant="outlined"
            type="password"
            fullWidth
          />
          <Button type="submit" variant="outlined">
            Register Account
          </Button>
        </Box>
      </form>
    </div>
  );
};
