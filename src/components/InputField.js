import * as React from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
      <TextField
        type={props.type}
        onInput={props.onInput}
        style={{ width: "100%" }}
        id={props.id}
        label={props.label}
        variant={props.variant}
        value={props.value}
        onChange={(event) =>
          props.onChange &&
          props.onChange({
            target: { value: event.target.value, name: props.name },
          })
        }
      />
  );
};

export default InputField;
