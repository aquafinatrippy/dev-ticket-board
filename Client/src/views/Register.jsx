import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { CenterContent } from "../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { signUp, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const { user, loading, success, message, error } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [error, success, user, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2 || password2 !== password) {
      toast.error("Passwords dont match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(signUp(userData));
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <main>
      <Paper>
        <Box sx={{ width: "80%", margin: "0 auto", padding: "20px" }}>
          <Box
            sx={{
              ...CenterContent,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar>
              <GroupAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </Box>
          <form onSubmit={(e) => onSubmit(e)}>
            <TextField
              required
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              autoFocus
              onChange={(e) => onChange(e)}
              label="Name"
              margin="normal"
              variant="standard"
              fullWidth
            />
            <TextField
              required
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              autoFocus
              onChange={(e) => onChange(e)}
              label="Email"
              margin="normal"
              variant="standard"
              fullWidth
            />

            <TextField
              label="Password"
              margin="normal"
              required
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => onChange(e)}
              name="password"
              id="password"
              value={password}
              fullWidth
            />
            <TextField
              label="Confirm Password"
              margin="normal"
              required
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => onChange(e)}
              name="password2"
              id="password2"
              value={password2}
              fullWidth
            />
            <Box sx={CenterContent}>
              <Button
                type="submit"
                variant="text"
                color="primary"
                size="medium"
                fullWidth
              >
                Register
              </Button>
            </Box>
          </form>{" "}
        </Box>
      </Paper>
    </main>
  );
};
