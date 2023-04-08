import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to={"/new-ticket"}>Create new ticket </Link>
      <Link to={"/tickets"}>View my tickets </Link>
    </div>
  );
};
