<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> main
import InputField from "./InputField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { changeKeyReportes } from "../store/actions/reportes.actions";
import { useDispatch, useSelector } from "react-redux";
import useCollapse from "react-collapsed";
import TextField from "./TextField";
<<<<<<< HEAD

const Form = () => {
  return (
    <div>
      <DatosGenerales></DatosGenerales>
=======
import DateTimePicker from "./DatePicker";
import SelectField from "./SelectField";
import * as Catalogos from "../const/guatemala";
const Form = () => {
  const [catalogos, setCatalogos] = useState(null);
  useEffect(() => {
    setCatalogos(Catalogos.Guatemala);
  }, [catalogos]);

  return (
    <div>
      <DatosGenerales catalogos={catalogos}></DatosGenerales>
>>>>>>> main
      <DatosPersonales></DatosPersonales>
      <DatosInformativos></DatosInformativos>
      <Observaciones></Observaciones>
    </div>
  );
};

<<<<<<< HEAD
const DatosGenerales = () => {
=======
const DatosGenerales = ({catalogos}) => {
>>>>>>> main
  const dispatch = useDispatch();
  const config = {
    defaultExpanded: true,
  };
<<<<<<< HEAD
  const { getCollapseProps, getToggleProps } = useCollapse(config);
=======

  console.log(catalogos);
>>>>>>> main


  const { getCollapseProps, getToggleProps } = useCollapse(config);
  const detalleReporte = useSelector(({ state }) => state.detalleReporte);

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
<<<<<<< HEAD
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
=======
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item xs={12}>
              <InputField
                id="responsable"
                name="responsable"
                onChange={handleChange}
                variant="outlined"
                label="Responsable"
                value={detalleReporte?.responsable || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                name="id_alta_verapaz"
                id= "id_alta_verapaz"
                valueKey="id_alta_verapaz"
                opciones={catalogos?.AltaVerapaz || ""}
              ></SelectField>
                          <SelectField
                name="id_alta_verapaz"
                id= "id_alta_verapaz"
                valueKey="id_alta_verapaz"
                opciones={catalogos?.BajaVerapaz || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="tipo_servicio"
                name="tipo_servicio"
                onChange={handleChange}
                variant="outlined"
                label="Tipo de servicio"
                value={detalleReporte?.tipo_servicio || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="no_hoja"
                name="no_hoja"
                onChange={handleChange}
                variant="outlined"
                label="No. de hoja"
                value={detalleReporte?.no_hoja || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <DateTimePicker
                id="date"
                name="date"
                onChange={handleChange}
                label="Fecha de hoja"
                value={detalleReporte?.date || ""}
              ></DateTimePicker>
>>>>>>> main
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

<<<<<<< HEAD
  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);
=======
  const detalleReporte = useSelector(({ state }) => state.detalleReporte);
>>>>>>> main

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
<<<<<<< HEAD
                value={detallePelicula?.nombre || ""}
=======
                value={detalleReporte?.nombre || ""}
>>>>>>> main
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
<<<<<<< HEAD
                value={detallePelicula?.genero || ""}
=======
                value={detalleReporte?.genero || ""}
>>>>>>> main
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
<<<<<<< HEAD
                value={detallePelicula?.anio || ""}
=======
                value={detalleReporte?.anio || ""}
>>>>>>> main
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
<<<<<<< HEAD
                value={detallePelicula?.autor || ""}
=======
                value={detalleReporte?.autor || ""}
>>>>>>> main
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

<<<<<<< HEAD
  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);
=======
  const detalleReporte = useSelector(({ state }) => state.detalleReporte);
>>>>>>> main

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
<<<<<<< HEAD
                value={detallePelicula?.nombre || ""}
=======
                value={detalleReporte?.nombre || ""}
>>>>>>> main
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
<<<<<<< HEAD
                value={detallePelicula?.genero || ""}
=======
                value={detalleReporte?.genero || ""}
>>>>>>> main
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
<<<<<<< HEAD
                value={detallePelicula?.anio || ""}
=======
                value={detalleReporte?.anio || ""}
>>>>>>> main
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
<<<<<<< HEAD
                value={detallePelicula?.autor || ""}
=======
                value={detalleReporte?.autor || ""}
>>>>>>> main
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

<<<<<<< HEAD
  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);
=======
  const detalleReporte = useSelector(({ state }) => state.detalleReporte);
>>>>>>> main

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
<<<<<<< HEAD
                value={detallePelicula?.nombre || ""}
=======
                value={detalleReporte?.nombre || ""}
>>>>>>> main
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="genero"
                name="genero"
                onChange={handleChange}
                variant="outlined"
                label="Genero"
<<<<<<< HEAD
                value={detallePelicula?.genero || ""}
=======
                value={detalleReporte?.genero || ""}
>>>>>>> main
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
<<<<<<< HEAD
                value={detallePelicula?.anio || ""}
=======
                value={detalleReporte?.anio || ""}
>>>>>>> main
              ></InputField>
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputField
                id="autor"
                name="autor"
                onChange={handleChange}
                variant="outlined"
                label="Autor"
<<<<<<< HEAD
                value={detallePelicula?.autor || ""}
=======
                value={detalleReporte?.autor || ""}
>>>>>>> main
              ></InputField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Form;
