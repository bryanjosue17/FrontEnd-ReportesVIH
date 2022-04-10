import moment from "moment";

const FORMATO_FECHA_GENERAL = "YYYY-MM-DD";

export const formatFechaDatePicker = (
  fecha,
  formato = FORMATO_FECHA_GENERAL
) => {
  const fecha_ = fecha
    ? String(fecha).match(/.[0-9]{3}Z/)
      ? formatearFechaUTC(fecha, formato, {
          keepLocalTime: false,
        })
      : formatearFechaUTC(fecha, formato, {
          keepLocalTime: true,
        })
    : fecha;
  return fecha_;
};

export function formatearFechaUTC(
  fecha,
  formato = "DD-MM-YYYY",
  { keepLocalTime = false } = {}
) {
  return moment(fecha).isValid()
    ? moment(fecha).utc(keepLocalTime).format(formato)
    : fecha;
}
