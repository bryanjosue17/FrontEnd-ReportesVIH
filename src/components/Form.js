import React, { useState } from "react";
import InputField from "./InputField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { changeKeyReportes } from "../store/actions/reportes.actions";
import { useDispatch, useSelector } from "react-redux";
import useCollapse from "react-collapsed";
import TextField from "./TextField";

const Form = () => {
  return (
    <div>
      <DatosGenerales></DatosGenerales>
      <DatosPersonales></DatosPersonales>
      <DatosInformativos></DatosInformativos>
      <Observaciones></Observaciones>
    </div>
  );
};

const DatosGenerales = () => {
  const dispatch = useDispatch();
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);

  const handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyReportes(data));
  };

  return (
    <div>
      <div {...getToggleProps()}>
        <TextField variant="h6" label="Datos generales:"></TextField>
      </div>

      <div {...getCollapseProps()}>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Grid container>
            <Grid item lg={6} xs={12}>
              <InputField
                id="nombre"
                name="nombre"
                onChange={handleChange}
                variant="outlined"
                label="Nombre"
                value={detallePelicula?.nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
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
                variant="outlined"
                label="Año"
                value={detallePelicula?.anio || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
                value={detallePelicula?.autor || ""}
              ></InputField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

const DatosPersonales = () => {
  const dispatch = useDispatch();
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);

  const handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyReportes(data));
  };

  return (
    <div>
      <div {...getToggleProps()}>
        <TextField variant="h6" label="Datos personales:"></TextField>
      </div>

      <div {...getCollapseProps()}>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Grid container>
            <Grid item lg={6} xs={12}>
              <InputField
                id="nombre"
                name="nombre"
                onChange={handleChange}
                variant="outlined"
                label="Nombre"
                value={detallePelicula?.nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
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
                variant="outlined"
                label="Año"
                value={detallePelicula?.anio || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
                value={detallePelicula?.autor || ""}
              ></InputField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

const DatosInformativos = () => {
  const dispatch = useDispatch();
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);

  const handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyReportes(data));
  };

  return (
    <div>
      <div {...getToggleProps()}>
        <TextField variant="h6" label="Datos Informativos:"></TextField>
      </div>

      <div {...getCollapseProps()}>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Grid container>
            <Grid item lg={6} xs={12}>
              <InputField
                id="nombre"
                name="nombre"
                onChange={handleChange}
                variant="outlined"
                label="Nombre"
                value={detallePelicula?.nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
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
                variant="outlined"
                label="Año"
                value={detallePelicula?.anio || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
                value={detallePelicula?.autor || ""}
              ></InputField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

const Observaciones = () => {
  const dispatch = useDispatch();
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);

  const handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyReportes(data));
  };

  return (
    <div>
      <div {...getToggleProps()}>
        <TextField variant="h6" label="Observaciones:"></TextField>
      </div>

      <div {...getCollapseProps()}>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Grid container>
            <Grid item lg={6} xs={12}>
              <InputField
                id="nombre"
                name="nombre"
                onChange={handleChange}
                variant="outlined"
                label="Nombre"
                value={detallePelicula?.nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
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
                variant="outlined"
                label="Año"
                value={detallePelicula?.anio || ""}
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
                value={detallePelicula?.autor || ""}
              ></InputField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Form;
