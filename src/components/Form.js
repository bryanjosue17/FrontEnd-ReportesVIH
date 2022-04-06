import React from "react";
import ButtonComponent from "./Button";
import InputField from "./InputField";
import TextField from "./TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useToasts } from "react-toast-notifications";
import { changeKeyPeliculas } from "../store/actions/peliculas.actions";
import { useDispatch, useSelector } from "react-redux";

const FormPeli = () => {
  const dispatch = useDispatch();

  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);

  const handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyPeliculas(data));
  };

  return (
    <div>
      <Paper
        style={{
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
        }}
      >
        <Grid container>
          <Grid item lg={6} xs={12}>
            <InputField
              id="nombre"
              name="nombre"
              onChange={handleChange}
              variante="outlined"
              texto="Nombre"
              value={detallePelicula?.nombre || ""}
            ></InputField>
          </Grid>
          <Grid item lg={6} xs={12}>
            <InputField
              id="genero"
              name="genero"
              onChange={handleChange}
              variante="outlined"
              texto="Genero"
              value={detallePelicula?.genero || ""}
            ></InputField>
          </Grid>
          <Grid item lg={6} xs={12}>
            <InputField
              onInput={(e) => (e.target.value = e.target.value.slice(0, 4))}
              type="number"
              id="anio"
              name="anio"
              onChange={handleChange}
              variante="outlined"
              texto="Año"
              value={detallePelicula?.anio || ""}
            ></InputField>
          </Grid>
          <Grid item lg={6} xs={12}>
            <InputField
              id="autor"
              name="autor"
              onChange={handleChange}
              variante="outlined"
              texto="Autor"
              value={detallePelicula?.autor || ""}
            ></InputField>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FormPeli;
