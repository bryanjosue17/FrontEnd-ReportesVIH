import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectField = (props) => {


  return (
    <FormControl fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <Select
        variant={props.variant}
       value={props.value}
        id={props.id}
        label={props.label}
        onChange={(event) =>
          props.onChange &&
          props.onChange({
            target: { value: event.target.value, name: props.name },
          })
        }
      >
        {props.opciones?.length > 0 ? (
          props.opciones.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem disabled={props.disabled} value="-1">
            Sin selección
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectField;
