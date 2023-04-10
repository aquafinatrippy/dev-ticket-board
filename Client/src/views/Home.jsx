import { Box, Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div>
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={() => navigate("/new-ticket")}
          endIcon={<NoteAddIcon />}
        >
          Create new ticket
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={() => navigate("/tickets")}
          endIcon={<VisibilityIcon />}
        >
          View my tickets
        </Button>
      </div>
    </Box>
  );
};
