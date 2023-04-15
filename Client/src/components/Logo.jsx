import { Box, Typography } from "@mui/material";
import React from "react";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BugReportIcon from "@mui/icons-material/BugReport";

export const Logo = () => {
  return (
    <Box sx={{ padding: "5px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ConfirmationNumberIcon color={"primary"} />
        <BugReportIcon />
      </Box>
      <hr />
      <Box>
        <Typography color={"primary"}>DevTM</Typography>
      </Box>
    </Box>
  );
};
