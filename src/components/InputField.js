import * as React from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
    <TextField
      value={props.value}
      defaultValue={props.defaultValue}
      onBlur={props.onBlur}
      type={props.type}
      onInput={props.onInput}
      style={{ width: "100%" }}
      id={props.id}
      label={props.label}
      disabled={props.disabled}
      variant={props.variant}
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
