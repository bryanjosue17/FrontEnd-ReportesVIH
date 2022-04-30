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


  const handleInputChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyReportes(data));
  };
  const handleInputSelectChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    dispatch(changeKeyReportes(data));
    let item = Guatemala[data];
    setMunis(item);
  };
  


  const handleChange = _.debounce(handleInputChange, 200);
  const handleSelectChange = _.debounce(handleInputSelectChange, 200);


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
              onBlur={handleChange}
              variant="outlined"
              label="Responsable"
              defaultValue={detalleReporte?.responsable || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="tipo_cargo"
              name="tipo_cargo"
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}

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
              onBlur={handleChange}

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
              onBlur={handleChange}
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
              onBlur={handleChange}
              variant="outlined"
              label="Día Consulta"
              defaultValue={detalleReporte?.dia_consulta || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="primer_nombre"
              name="primer_nombre"
              onBlur={handleChange}
              variant="outlined"
              label="Primer Nombre"
              defaultValue={detalleReporte?.primer_nombre || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="segundo_nombre"
              name="segundo_nombre"
              onBlur={handleChange}
              variant="outlined"
              label="Segundo Nombre"
              defaultValue={detalleReporte?.segundo_nombre || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="primer_apellido"
              name="primer_apellido"
              onBlur={handleChange}
              variant="outlined"
              label="Primer Apellido"
              defaultValue={detalleReporte?.primer_apellido || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="segundo_apellido"
              name="segundo_apellido"
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleSelectChange}
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
              onBlur={handleChange}
              label="Fecha Nacimiento"
              defaultValue={detalleReporte?.fecha_nac || ""}
            ></DateTimePicker>
          </Grid>
          <Grid item lg={4} xs={12}>
            <InputField
              id="lugar_poblado"
              name="lugar_poblado"
              onBlur={handleChange}
              variant="outlined"
              label="Lugar Poblado"
              defaultValue={detalleReporte?.lugar_poblado || ""}
            ></InputField>
          </Grid>
          <Grid item lg={4} xs={12}>
            <SelectField
              id="sexo"
              name="sexo"
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
              onBlur={handleChange}
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
