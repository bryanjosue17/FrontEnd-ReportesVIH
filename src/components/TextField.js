import React from "react";
import Typography from "@mui/material/Typography";

const TextField = (props) => {
  return (
    <div >
      <Typography style={props.style} variant={props.variant}>{props.label}</Typography>
    </div>
  );
};

export default TextField;
