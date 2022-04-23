import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { changeKeyReportes } from "../store/actions/reportes.actions";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "./DatePicker";
import SelectField from "./SelectField";
import { catalogs } from "../const/catalogs";
import { Guatemala } from "../const/guatemala";
import _ from "lodash";

const Form = () => {
  const dispatch = useDispatch();

  const [catalogos, setCatalogos] = useState();
  const [deptos, setDeptos] = useState([]);
  const [munis, setMunis] = useState([]);

  const detalleReporte = useSelector(({ state }) => state.detalleReporte);

  useEffect(() => {
    setCatalogos(catalogs);
  }, []);

  useEffect(() => {
    let data = [];
    for (let item in Guatemala) {
      data.push(item);
    }
    setDeptos(data);
  }, []);



  
  const debounceOnChangeSelect = _.debounce((id, value) => {
    let data = { [id]: value };
    dispatch(changeKeyReportes(data));
    let item = Guatemala[value];
    setMunis(item);
  }, 200);
  const debounceOnChange = _.debounce((id, value) => {
    let data = { [id]: value };
    dispatch(changeKeyReportes(data));
  }, 200);

  return (
    <div>
      <Paper
        style={{
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Grid container style={{ padding: "2%" }} spacing={3}>
          <Grid item xs={12}>
            <InputField
              id="responsable"
              name="responsable"
              onChange={(e)=> debounceOnChange("responsable", e.target.value)}
              variant="outlined"
              label="Responsable"
              defaultValue={detalleReporte?.responsable || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="tipo_cargo"
              name="tipo_cargo"
              onChange={(e)=> debounceOnChange("tipo_cargo", e.target.value)}
              variant="outlined"
              label="Tipo Cargo"
              opciones={catalogos?.tipo_cargo || []}
              defaultValue={detalleReporte?.tipo_cargo || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="tipo_servicio"
              name="tipo_servicio"
              onChange={(e)=> debounceOnChange("tipo_servicio", e.target.value)}
              variant="outlined"
              label="Tipo Servicio"
              opciones={catalogos?.tipo_servicio || []}
              defaultValue={detalleReporte?.tipo_servicio || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="no_hoja"
              name="no_hoja"
              onChange={(e)=> debounceOnChange("no_hoja", e.target.value)}
              variant="outlined"
              label="No. de hoja"
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
              defaultValue={detalleReporte?.no_hoja || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <DateTimePicker
              id="date"
              name="date"
              onChange={(e)=> debounceOnChange("date", e.target.value)}
              label="Fecha de hoja"
              defaultValue={detalleReporte?.date || ""}
            ></DateTimePicker>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        style={{
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Grid container style={{ padding: "2%" }} spacing={3}>
          <Grid item lg={4} xs={12}>
            <InputField
              id="no_orden"
              name="no_orden"
              onChange={(e)=> debounceOnChange("no_orden", e.target.value)}
              variant="outlined"
              label="No. Orden"
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
              defaultValue={detalleReporte?.no_orden || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="dia_consulta"
              name="dia_consulta"
              onChange={(e)=> debounceOnChange("dia_consulta", e.target.value)}
              variant="outlined"
              label="Día Consulta"
              defaultValue={detalleReporte?.dia_consulta || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="primer_nombre"
              name="primer_nombre"
              onChange={(e)=> debounceOnChange("primer_nombre", e.target.value)}
              variant="outlined"
              label="Primer Nombre"
              defaultValue={detalleReporte?.primer_nombre || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="segundo_nombre"
              name="segundo_nombre"
              onChange={(e)=> debounceOnChange("segundo_nombre", e.target.value)}
              variant="outlined"
              label="Segundo Nombre"
              defaultValue={detalleReporte?.segundo_nombre || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="primer_apellido"
              name="primer_apellido"
              onChange={(e)=> debounceOnChange("primer_apellido", e.target.value)}
              variant="outlined"
              label="Primer Apellido"
              defaultValue={detalleReporte?.primer_apellido || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="segundo_apellido"
              name="segundo_apellido"
              onChange={(e)=> debounceOnChange("segundo_apellido", e.target.value)}
              variant="outlined"
              label="Segundo Apellido"
              defaultValue={detalleReporte?.segundo_apellido || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="cui"
              name="cui"
              type="number"
              onChange={(e)=> debounceOnChange("cui", e.target.value)}
              variant="outlined"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 13))}
              label="CUI"
              defaultValue={detalleReporte?.cui || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="nacionalidad"
              name="nacionalidad"
              onChange={(e)=> debounceOnChange("nacionalidad", e.target.value)}
              variant="outlined"
              label="Nacionalidad"
              opciones={catalogos?.nacionalidad || []}
              defaultValue={detalleReporte?.nacionalidad || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="departamento_nac"
              name="departamento_nac"
              onChange={(e)=> debounceOnChangeSelect("segundo_apellido", e.target.value)}
              variant="outlined"
              label="Departamento Nacimiento"
              disabled={
                detalleReporte?.nacionalidad === "guatemalteca" ? false : true
              }
              opciones={deptos || []}
              defaultValue={detalleReporte?.departamento_nac || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="municipio_nac"
              name="municipio_nac"
              onChange={(e)=> debounceOnChange("municipio", e.target.value)}
              variant="outlined"
              disabled={
                detalleReporte?.nacionalidad === "guatemalteca" ? false : true
              }
              opciones={munis || []}
              label="Municipio Nacimiento"
              defaultValue={detalleReporte?.municipio_nac || []}
            ></SelectField>
          </Grid>

          <Grid item lg={4} xs={12}>
            <DateTimePicker
              id="fecha_nac"
              name="fecha_nac"
              onChange={(e)=> debounceOnChange("fecha_nac", e.target.value)}
              label="Fecha Nacimiento"
              defaultValue={detalleReporte?.fecha_nac || ""}
            ></DateTimePicker>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="lugar_poblado"
              name="lugar_poblado"
              onChange={(e)=> debounceOnChange("lugar_poblado", e.target.value)}
              variant="outlined"
              label="Lugar Poblado"
              defaultValue={detalleReporte?.lugar_poblado || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="sexo"
              name="sexo"
              onChange={(e)=> debounceOnChange("sexo", e.target.value)}
              variant="outlined"
              label="Sexo"
              opciones={catalogos?.sexo || []}
              defaultValue={detalleReporte?.sexo || ""}
            ></SelectField>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        style={{
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Grid container style={{ padding: "2%" }} spacing={3}>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="orientacion_sexual"
              name="orientacion_sexual"
              onChange={(e)=> debounceOnChange("orientacion_sexual", e.target.value)}
              variant="outlined"
              label="Orientación Sexual"
              opciones={catalogos?.orientacion_sexual || ""}
              defaultValue={detalleReporte?.orientacion_sexual || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="identidad_genero"
              name="identidad_genero"
              onChange={(e)=> debounceOnChange("identidad_genero", e.target.value)}
              variant="outlined"
              label="Identidad Género"
              opciones={catalogos?.identidad_genero || ""}
              defaultValue={detalleReporte?.identidad_genero || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="estado_civil"
              name="estado_civil"
              onChange={(e)=> debounceOnChange("estado_civil", e.target.value)}
              variant="outlined"
              label="Estado Civil"
              opciones={catalogos?.estado_civil || ""}
              defaultValue={detalleReporte?.estado_civil || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="escolaridad"
              name="escolaridad"
              onChange={(e)=> debounceOnChange("escolaridad", e.target.value)}
              variant="outlined"
              label="Escolaridad"
              opciones={catalogos?.escolaridad || ""}
              defaultValue={detalleReporte?.escolaridad || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="pueblo"
              name="pueblo"
              onChange={(e)=> debounceOnChange("pueblo", e.target.value)}
              variant="outlined"
              label="Pueblo"
              opciones={catalogos?.pueblo || ""}
              defaultValue={detalleReporte?.pueblo || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="comunidad_len"
              name="comunidad_len"
              onChange={(e)=> debounceOnChange("comunidad_len", e.target.value)}
              variant="outlined"
              label="Comunidad Lingüística"
              opciones={catalogos?.comunidad_len || ""}
              defaultValue={detalleReporte?.comunidad_len || ""}
              disabled={detalleReporte?.pueblo === "Maya" ? false : true}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="condicion_riesgo"
              name="condicion_riesgo"
              onChange={(e)=> debounceOnChange("condicion_riesgo", e.target.value)}
              variant="outlined"
              label="Condición de Riesgo"
              opciones={catalogos?.condicion_riesgo || ""}
              defaultValue={detalleReporte?.condicion_riesgo || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="motivo_orientacion"
              name="motivo_orientacion"
              onChange={(e)=> debounceOnChange("motivo_orientacion", e.target.value)}
              variant="outlined"
              label="Motivo Orientación"
              opciones={catalogos?.motivo_orientacion || ""}
              defaultValue={detalleReporte?.motivo_orientacion || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="control_prenatal"
              name="control_prenatal"
              onChange={(e)=> debounceOnChange("control_prenatal", e.target.value)}
              variant="outlined"
              label="Control Prenatal"
              opciones={catalogos?.control_prenatal || ""}
              defaultValue={detalleReporte?.control_prenatal || ""}
              disabled={
                detalleReporte?.motivo_orientacion === "Embarazo" ||
                detalleReporte?.motivo_orientacion === "Pareja de embarazada"
                  ? false
                  : true
              }
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="semana_gestacion"
              name="semana_gestacion"
              type="number"
              onChange={(e)=> debounceOnChange("semana_gestacion", e.target.value)}
              variant="outlined"
              label="Semana de Gestación"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
              defaultValue={detalleReporte?.semana_gestacion || ""}
              disabled={
                detalleReporte?.motivo_orientacion === "Embarazo" ||
                detalleReporte?.motivo_orientacion === "Pareja de embarazada"
                  ? false
                  : true
              }
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="orientacion_preprueba"
              name="orientacion_preprueba"
              onChange={(e)=> debounceOnChange("orientacion_preprueba", e.target.value)}
              variant="outlined"
              label="Orientación Preprueba"
              opciones={catalogos?.orientacion_preprueba || ""}
              defaultValue={detalleReporte?.orientacion_preprueba || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="resultados_tamizaje"
              name="resultados_tamizaje"
              onChange={(e)=> debounceOnChange("resultados_tamizaje", e.target.value)}
              variant="outlined"
              label="Resultados Tamizaje"
              opciones={catalogos?.resultados_tamizaje || ""}
              defaultValue={detalleReporte?.resultados_tamizaje || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="resultados_prueba_vih"
              name="resultados_prueba_vih"
              onChange={(e)=> debounceOnChange("resultados_prueba_vih", e.target.value)}
              variant="outlined"
              label="Resultados Prueba VIH"
              opciones={catalogos?.resultados_prueba_vih || ""}
              defaultValue={detalleReporte?.resultados_prueba_vih || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="prueba_treponemica"
              name="prueba_treponemica"
              onChange={(e)=> debounceOnChange("prueba_treponemica", e.target.value)}
              variant="outlined"
              label="Prueba Treponémica"
              opciones={catalogos?.prueba_treponemica || ""}
              defaultValue={detalleReporte?.prueba_treponemica || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="prueba_no_treponemica"
              name="prueba_no_treponemica"
              onChange={(e)=> debounceOnChange("prueba_no_treponemica", e.target.value)}
              variant="outlined"
              label="Resultados No. Treponémica"
              opciones={catalogos?.prueba_no_treponemica || ""}
              defaultValue={detalleReporte?.prueba_no_treponemica || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="resultado_difucion"
              name="resultado_difucion"
              onChange={(e)=> debounceOnChange("resultado_difucion", e.target.value)}
              variant="outlined"
              label="Resultados Difución"
              opciones={catalogos?.resultado_difucion || ""}
              defaultValue={detalleReporte?.resultado_difucion || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="referencia"
              name="referencia"
              onChange={(e)=> debounceOnChange("referencia", e.target.value)}
              variant="outlined"
              label="Referencia"
              opciones={catalogos?.referencia || []}
              defaultValue={detalleReporte?.referencia || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="uai_ref"
              name="uai_ref"
              onChange={(e)=> debounceOnChange("uai_ref", e.target.value)}
              variant="outlined"
              label="UAI a la que se refirió"
              opciones={catalogos?.uai_ref || []}
              defaultValue={detalleReporte?.uai_ref || ""}
            ></SelectField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="observaciones"
              name="observaciones"
              onChange={(e)=> debounceOnChange("observaciones", e.target.value)}
              variant="outlined"
              label="Observaciones"
              defaultValue={detalleReporte?.observaciones || ""}
            ></InputField>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Form;
