import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
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
          <div className="blur">
            <span>Create New Ticket</span>
            <br />
            <NoteAddIcon />
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
          <div className="blur">
            <span>View Tickets</span>
            <br />
            <VisibilityIcon />
          </div>
        </Box>
      </div>
    </Box>
  );
};
