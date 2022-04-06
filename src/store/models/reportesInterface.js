import moment from "moment";

export const peliculasInterface = (data = {}) => {
  return {
    id_pelicula: data?.id_pelicula || null,
    nombre: data?.nombre || "",
    genero: data?.genero || "",
    anio: data?.anio || "",
    autor: data?.autor || "",
    datetime: moment().format("lll") || "",
  };
};
