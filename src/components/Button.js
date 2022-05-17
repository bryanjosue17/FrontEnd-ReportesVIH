import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = (props) => {

  return (
    <div >
      <Button style={props.style} onClick={() => props.onClick()} variant={props.variant}>{props.label}</Button>
    </div>
  );
};

export default ButtonComponent;
