import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TicketDialog from "./TicketDialog";

export const TicketCard = ({ title, description, id, dragStart }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <TicketDialog id={id} />
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275, padding: "10px 0 10px 0" }}>
      <Card id={id} onDragStart={dragStart} draggable={true}>
        {card}
      </Card>
    </Box>
  );
};
