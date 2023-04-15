import { Box, Button, Typography } from "@mui/material";
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
        gap: "20px",
      }}
    >
      <div>
        <Box
          onClick={() => navigate("/new-ticket")}
          width={400}
          height={300}
          className="write_note"
        >
          <div class="blur">
            <span>Create New Ticket</span>
          </div>
        </Box>
      </div>
      <div>
        <Box
          onClick={() => navigate("/tickets")}
          width={400}
          height={300}
          className="read_note"
        >
          <div class="blur">
            <span>View Tickets</span>
          </div>
        </Box>
      </div>
    </Box>
  );
};
