import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { changeKeyReportes, createReportes, deleteReporte, retrieveReporte, updateReporte } from "../store/actions/reportes.actions";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "./DatePicker";
import SelectField from "./SelectField";
import { catalogs } from "../const/catalogs";
import { Guatemala } from "../const/guatemala";
import useCollapse from 'react-collapsed';
import _ from "lodash";
import TextField from "./TextField";
import { useToasts } from "react-toast-notifications";
import ReporteDataService from "../services/reportes.service";


const Form = (props) => {

  const state = {
    id_reporte: null,
    responsable: null,
    tipo_cargo: null,
    tipo_servicio: null,
    no_hoja: null,
    date: null,
    no_orden: null,
    dia_consulta: null,
    primer_nombre: null,
    segundo_nombre: null,
    primer_apellido: null,
    segundo_apellido: null,
    cui: null,
    nacionalidad: null,
    departamento_nac: null,
    municipio_nac: null,
    fecha_nac: null,
    lugar_poblado: null,
    sexo: null,
    orientacion_sexual: null,
    identidad_genero: null,
    estado_civil: null,
    escolaridad: null,
    pueblo: null,
    comunidad_len: null,
    condicion_riesgo: null,
    motivo_orientacion: null,
    control_prenatal: null,
    semana_gestacion: null,
    orientacion_preprueba: null,
    resultados_tamizaje: null,
    resultados_prueba_vih: null,
    prueba_treponemica: null,
    prueba_no_treponemica: null,
    resultado_difucion: null,
    referencia: null,
    uai_ref: null,
    observaciones: null,
    datetime: null,
  };




  const dispatch = useDispatch();
  const [detalleReporte, setDetalleReporte] = useState(state);

  const { addToast } = useToasts();
  const [catalogos, setCatalogos] = useState();
  const [deptos, setDeptos] = useState([]);
  const [munis, setMunis] = useState([]);
  const config = {
    defaultExpanded: true
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetalleReporte({ ...detalleReporte, [name]: value });
  };
  const handleSelectChange = async (event) => {
    const { name, value } = event.target;
    setDetalleReporte({ ...detalleReporte, [name]: value });
    let data = Guatemala[value];
    setMunis(data);
  };



  const handleCreateOrEdit = () => {
    const {
      id_reporte,
      responsable,
      tipo_cargo,
      tipo_servicio,
      no_hoja,
      date,
      no_orden,
      dia_consulta,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      cui,
      nacionalidad,
      departamento_nac,
      municipio_nac,
      fecha_nac,
      lugar_poblado,
      sexo,
      orientacion_sexual,
      identidad_genero,
      estado_civil,
      escolaridad,
      pueblo,
      comunidad_len,
      condicion_riesgo,
      motivo_orientacion,
      control_prenatal,
      semana_gestacion,
      orientacion_preprueba,
      resultados_tamizaje,
      resultados_prueba_vih,
      prueba_treponemica,
      prueba_no_treponemica,
      resultado_difucion,
      referencia,
      uai_ref,
      observaciones,
      datetime,
    } = detalleReporte;

    if (id_reporte === null) {
      dispatch(
        createReportes(
          responsable,
          tipo_cargo,
          tipo_servicio,
          no_hoja,
          date,
          no_orden,
          dia_consulta,
          primer_nombre,
          segundo_nombre,
          primer_apellido,
          segundo_apellido,
          cui,
          nacionalidad,
          departamento_nac,
          municipio_nac,
          fecha_nac,
          lugar_poblado,
          sexo,
          orientacion_sexual,
          identidad_genero,
          estado_civil,
          escolaridad,
          pueblo,
          comunidad_len,
          condicion_riesgo,
          motivo_orientacion,
          control_prenatal,
          semana_gestacion,
          orientacion_preprueba,
          resultados_tamizaje,
          resultados_prueba_vih,
          prueba_treponemica,
          prueba_no_treponemica,
          resultado_difucion,
          referencia,
          uai_ref,
          observaciones,
          datetime
        )
      )
        .then(() => {
          addToast("La información se ha insertado correctamente.", {
            appearance: "success",
            autoDismiss: true,
          });
        })
        .catch((e) => {
          addToast("Ha sucedido un error", {
            appearance: "error",
            autoDismiss: true,
          });
        });
    } else {
      dispatch(updateReporte(id_reporte, detalleReporte))
        .then(() => {
          addToast("La información se ha actualizado correctamente.", {
            appearance: "info",
            autoDismiss: true,
          });
        })
        .catch((e) => {
          addToast("Ha sucedido un error", {
            appearance: "error",
            autoDismiss: true,
          });
        });
    }
  };

  const handleDelete = () => {
    dispatch(deleteReporte(detalleReporte.id_reporte))
      .then(() => {
        addToast("La información se ha eliminado correctamente.", {
          appearance: "error",
          autoDismiss: true,
        });
      })
      .catch((e) => {
        addToast("Ha sucedido un error", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };  

  const getReporte = async (id) => {
    let response = await ReporteDataService.get(id);
 
    let datos = response.data;
    await handleSelectChange({
      target: {
        name: "municipio",
        value: datos.departamento,
      },
    });
    setDetalleReporte(datos);

  };

  useEffect(() => {
    getReporte(props.match.params.id);

  }, [props.match.params.id]);



  useEffect(() => {
    let data = [];
    for (let item in Guatemala) {
      data.push(item);
    }
    setDeptos(data);
  }, []);

  useEffect(() => {
    setCatalogos(catalogs);
  }, []);




  return (
    <div>
      <DatosGenerales catalogos={catalogos} detalleReporte={detalleReporte} handleChange={handleChange} config={config}></DatosGenerales>
      <DatosPersonales catalogos={catalogos} handleSelectChange={handleSelectChange} deptos={deptos} munis={munis} ha detalleReporte={detalleReporte} handleChange={handleChange} config={config}></DatosPersonales>
      <DatosInformativos catalogos={catalogos} detalleReporte={detalleReporte} handleChange={handleChange} config={config}></DatosInformativos>
      <Observaciones detalleReporte={detalleReporte} handleChange={handleChange} config={config}></Observaciones>
    </div>
  );
};


const DatosGenerales = ({ catalogos, config, handleChange, detalleReporte }) => {

  console.log("hola",detalleReporte);

  const { getCollapseProps, getToggleProps } = useCollapse(config);

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
                id="tipo_cargo"
                name="tipo_cargo"
                onChange={handleChange}
                variant="outlined"
                label="Tipo Cargo"
                opciones={catalogos?.tipo_cargo || []}
                value={detalleReporte?.tipo_cargo || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="tipo_servicio"
                name="tipo_servicio"
                onChange={handleChange}
                variant="outlined"
                label="Tipo Servicio"
                opciones={catalogos?.tipo_servicio || []}
                value={detalleReporte?.tipo_servicio || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="no_hoja"
                name="no_hoja"
                onChange={handleChange}

                variant="outlined"
                label="No. de hoja"
                type="number"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
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
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}


const DatosPersonales = ({ catalogos, deptos, munis, handleSelectChange, config, handleChange, detalleReporte }) => {
  const { getCollapseProps, getToggleProps } = useCollapse(config);

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
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item lg={4} xs={12}>
              <InputField
                id="no_orden"
                name="no_orden"
                onChange={handleChange}
                variant="outlined"
                label="No. Orden"
                type="number"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
                value={detalleReporte?.no_orden || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="dia_consulta"
                name="dia_consulta"
                onChange={handleChange}
                variant="outlined"
                label="Día Consulta"
                value={detalleReporte?.dia_consulta || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="primer_nombre"
                name="primer_nombre"
                onChange={handleChange}
                variant="outlined"
                label="Primer Nombre"
                value={detalleReporte?.primer_nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="segundo_nombre"
                name="segundo_nombre"
                onChange={handleChange}
                variant="outlined"
                label="Segundo Nombre"
                value={detalleReporte?.segundo_nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="primer_apellido"
                name="primer_apellido"
                onChange={handleChange}
                variant="outlined"
                label="Primer Apellido"
                value={detalleReporte?.primer_apellido || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="segundo_apellido"
                name="segundo_apellido"
                onChange={handleChange}
                variant="outlined"
                label="Segundo Apellido"
                value={detalleReporte?.segundo_apellido || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="cui"
                name="cui"
                type="number"
                onChange={handleChange}
                variant="outlined"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 13))}
                label="CUI"
                value={detalleReporte?.cui || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="nacionalidad"
                name="nacionalidad"
                onChange={handleChange}
                variant="outlined"
                label="Nacionalidad"
                opciones={catalogos?.nacionalidad || []}
                value={detalleReporte?.nacionalidad || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="departamento_nac"
                name="departamento_nac"
                onChange={handleChange}
                variant="outlined"
                label="Departamento Nacimiento"
                disabled={
                  detalleReporte?.nacionalidad === "guatemalteca" ? false : true
                }
                opciones={deptos || []}
                value={detalleReporte?.departamento_nac || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="municipio_nac"
                name="municipio_nac"
                onChange={handleSelectChange}
                variant="outlined"
                disabled={
                  detalleReporte?.nacionalidad === "guatemalteca" ? false : true
                }
                opciones={munis || []}
                label="Municipio Nacimiento"
                value={detalleReporte?.municipio_nac || []}
              ></SelectField>
            </Grid>

            <Grid item lg={4} xs={12}>
              <DateTimePicker
                id="fecha_nac"
                name="fecha_nac"
                onChange={handleChange}
                label="Fecha Nacimiento"
                value={detalleReporte?.fecha_nac || ""}
              ></DateTimePicker>
            </Grid>
            <Grid item lg={4} xs={12}>
              <InputField
                id="lugar_poblado"
                name="lugar_poblado"
                onChange={handleChange}
                variant="outlined"
                label="Lugar Poblado"
                value={detalleReporte?.lugar_poblado || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="sexo"
                name="sexo"
                onChange={handleChange}
                variant="outlined"
                label="Sexo"
                opciones={catalogos?.sexo || []}
                value={detalleReporte?.sexo || ""}
              ></SelectField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

const DatosInformativos = ({ config, catalogos, handleChange, detalleReporte }) => {

  const { getCollapseProps, getToggleProps } = useCollapse(config);

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
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="orientacion_sexual"
                name="orientacion_sexual"
                onChange={handleChange}
                variant="outlined"
                label="Orientación Sexual"
                opciones={catalogos?.orientacion_sexual || ""}
                value={detalleReporte?.orientacion_sexual || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="identidad_genero"
                name="identidad_genero"
                onChange={handleChange}
                variant="outlined"
                label="Identidad Género"
                opciones={catalogos?.identidad_genero || ""}
                value={detalleReporte?.identidad_genero || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="estado_civil"
                name="estado_civil"
                onChange={handleChange}
                variant="outlined"
                label="Estado Civil"
                opciones={catalogos?.estado_civil || ""}
                value={detalleReporte?.estado_civil || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="escolaridad"
                name="escolaridad"
                onChange={handleChange}
                variant="outlined"
                label="Escolaridad"
                opciones={catalogos?.escolaridad || ""}
                value={detalleReporte?.escolaridad || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="pueblo"
                name="pueblo"
                onChange={handleChange}
                variant="outlined"
                label="Pueblo"
                opciones={catalogos?.pueblo || ""}
                value={detalleReporte?.pueblo || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="comunidad_len"
                name="comunidad_len"
                onChange={handleChange}
                variant="outlined"
                label="Comunidad Lingüística"
                opciones={catalogos?.comunidad_len || ""}
                value={detalleReporte?.comunidad_len || ""}
                disabled={detalleReporte?.pueblo === "Maya" ? false : true}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="condicion_riesgo"
                name="condicion_riesgo"
                onChange={handleChange}
                variant="outlined"
                label="Condición de Riesgo"
                opciones={catalogos?.condicion_riesgo || ""}
                value={detalleReporte?.condicion_riesgo || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="motivo_orientacion"
                name="motivo_orientacion"
                onChange={handleChange}
                variant="outlined"
                label="Motivo Orientación"
                opciones={catalogos?.motivo_orientacion || ""}
                value={detalleReporte?.motivo_orientacion || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="control_prenatal"
                name="control_prenatal"
                onChange={handleChange}
                variant="outlined"
                label="Control Prenatal"
                opciones={catalogos?.control_prenatal || ""}
                value={detalleReporte?.control_prenatal || ""}
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
                onChange={handleChange}
                variant="outlined"
                label="Semana de Gestación"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                value={detalleReporte?.semana_gestacion || ""}
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
                onChange={handleChange}
                variant="outlined"
                label="Orientación Preprueba"
                opciones={catalogos?.orientacion_preprueba || ""}
                value={detalleReporte?.orientacion_preprueba || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="resultados_tamizaje"
                name="resultados_tamizaje"
                onChange={handleChange}
                variant="outlined"
                label="Resultados Tamizaje"
                opciones={catalogos?.resultados_tamizaje || ""}
                value={detalleReporte?.resultados_tamizaje || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="resultados_prueba_vih"
                name="resultados_prueba_vih"
                onChange={handleChange}
                variant="outlined"
                label="Resultados Prueba VIH"
                opciones={catalogos?.resultados_prueba_vih || ""}
                value={detalleReporte?.resultados_prueba_vih || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="prueba_treponemica"
                name="prueba_treponemica"
                onChange={handleChange}
                variant="outlined"
                label="Prueba Treponémica"
                opciones={catalogos?.prueba_treponemica || ""}
                value={detalleReporte?.prueba_treponemica || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="prueba_no_treponemica"
                name="prueba_no_treponemica"
                onChange={handleChange}
                variant="outlined"
                label="Resultados No. Treponémica"
                opciones={catalogos?.prueba_no_treponemica || ""}
                value={detalleReporte?.prueba_no_treponemica || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="resultado_difucion"
                name="resultado_difucion"
                onChange={handleChange}
                variant="outlined"
                label="Resultados Difución"
                opciones={catalogos?.resultado_difucion || ""}
                value={detalleReporte?.resultado_difucion || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="referencia"
                name="referencia"
                onChange={handleChange}
                variant="outlined"
                label="Referencia"
                opciones={catalogos?.referencia || []}
                value={detalleReporte?.referencia || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} xs={12}>
              <SelectField
                id="uai_ref"
                name="uai_ref"
                onChange={handleChange}
                variant="outlined"
                label="UAI a la que se refirió"
                opciones={catalogos?.uai_ref || []}
                value={detalleReporte?.uai_ref || ""}
              ></SelectField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};


const Observaciones = ({ config, handleChange, detalleReporte }) => {

  const { getCollapseProps, getToggleProps } = useCollapse(config);

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
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item lg={12} xs={12}>
              <InputField
                id="observaciones"
                name="observaciones"
                onChange={handleChange}
                variant="outlined"
                label="Observaciones"
                rows={5}
                multiline
                value={detalleReporte?.observaciones || ""}
              ></InputField>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Form;
