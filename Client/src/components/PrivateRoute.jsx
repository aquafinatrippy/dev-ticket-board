import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) return <CircularProgress />;

  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};
