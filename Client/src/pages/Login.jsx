import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { CenterContent } from "../styles/global";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { email, password } = formData;
  const dispatch = useDispatch();
  const { user, error, loading, success, message } = useSelector(
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
  }, [user, message, error]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Passwords dont match");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

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
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>
          <form onSubmit={(e) => onSubmit(e)}>
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
            <Box sx={CenterContent}>
              <Button
                type="submit"
                variant="text"
                color="primary"
                size="medium"
                fullWidth
              >
                Sign in
              </Button>
            </Box>
          </form>{" "}
        </Box>
      </Paper>
    </main>
  );
};
