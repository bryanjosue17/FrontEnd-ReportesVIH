import * as React from "react";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import { formatFechaDatePicker } from "../utils/fechas";
import moment from "moment";
const DateTimePicker = (props) => {
  const today = moment(new Date().getDate(), "DD/MM/YYYY");

  return (
    <DatePicker
      autoOk
      inputFormat="YYYY-MM-DD"
      mask={"____-__-__"} 
      id={props.id}
      maxDate={today}
      initialFocusedDate={today}
      label={props.label}
      value={props.value}
      defaultValue={props.defaultValue}
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
