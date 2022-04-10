import * as React from "react";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { formatFechaDatePicker } from "../utils/fechas";

const DateTimePicker = (props) => {
  return (
    <DatePicker
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={(date) =>
        props.onChange &&
        props.onChange({
          target: {
            value: formatFechaDatePicker(date),
            name: props.name,
          },
        })
      }
      renderInput={(params) => (
        <TextField style={{ width: "100%" }} {...params} />
      )}
    />
  );
};

export default DateTimePicker;
