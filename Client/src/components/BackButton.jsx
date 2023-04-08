import React from "react";
import { Link } from "react-router-dom";

export const BackButton = ({ url }) => {
  return (
    <Link to={url} className="btn btn-reverse">
      Back home
    </Link>
  );
};
