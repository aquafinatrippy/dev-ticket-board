import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useLocation } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Logo } from "./Logo";
import WindowIcon from "@mui/icons-material/Window";
//import useMediaQuery from "@mui/material/useMediaQuery";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Navbar = () => {
  //const mobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const activeLink = (route) => {
    if (location.pathname === route) return "primary";
    return "";
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignContent: "baseline",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {user ? (
                <Tooltip title={"Log out"}>
                  <IconButton onClick={() => onLogout()}>
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title={"Log In"}>
                  <IconButton
                    color={activeLink("/login")}
                    onClick={() => navigate("/login")}
                  >
                    <LockOpenIcon />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title={"View Tickets"}>
                <IconButton
                  onClick={() => navigate("/tickets")}
                  color={activeLink("/tickets")}
                >
                  <ConfirmationNumberIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Dashboard"}>
                <IconButton
                  color={activeLink("/")}
                  onClick={() => navigate("/")}
                >
                  <WindowIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box>
              <Logo />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
