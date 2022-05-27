import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  createReportes,
  deleteReporte,
  updateReporte,
} from "../store/actions/reportes.actions";
import { useDispatch } from "react-redux";
import DateTimePicker from "./DatePicker";
import SelectField from "./SelectField";
import { catalogs } from "../const/catalogs";
import { Guatemala } from "../const/guatemala";
import TextField from "./TextField";
import { useToasts } from "react-toast-notifications";
import ReporteDataService from "../services/reportes.service";
import ButtonComponent from "./Button";
import moment from "moment";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Fab from "@mui/material/Fab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileStepper, Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const steps = [
  {
    label: "Datos Generales",
  },
  {
    label: "Datos de la persona",
  },
  {
    label: "Pruebas realizadas ",
  },
  {
    label: "Observaciones ",
  },
];

const Form = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const history = useHistory();

  const navigateHome = () => {
    history.push("/inicio");
  };
  const state = {
    id_reporte: null,
    responsable: null,
    tipo_cargo: null,
    tipo_servicio: null,
    no_hoja: null,
    date: moment().format("YYYY-MM-DD"),
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
    fecha_nac: moment().format("YYYY-MM-DD"),
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
    datetime: moment().format("YYYY-MM-DD"),
  };

  const dispatch = useDispatch();
  const [detalleReporte, setDetalleReporte] = useState(state);

  const { addToast } = useToasts();
  const [catalogos, setCatalogos] = useState();
  const [deptos, setDeptos] = useState([]);
  const [munis, setMunis] = useState([]);
  const [tipo, setTipo] = useState("");
  const maxSteps = steps.length;

  const handleChange = (e) => {
    let data = { [e.target.name]: e.target.value };
    setDetalleReporte({ ...detalleReporte, ...data });
  };

  const handleSelectChange = async (e) => {
    let data = { [e.target.name]: e.target.value };

    setDetalleReporte({ ...detalleReporte, ...data });
    let muni = Guatemala[e.target.value];
    setMunis(muni);
  };

  const handleCreateOrEdit = () => {
    if (tipo === "Crear") {
      dispatch(
        createReportes(
          detalleReporte.responsable,
          detalleReporte.tipo_cargo,
          detalleReporte.tipo_servicio,
          detalleReporte.no_hoja,
          detalleReporte.date,
          detalleReporte.no_orden,
          detalleReporte.dia_consulta,
          detalleReporte.primer_nombre,
          detalleReporte.segundo_nombre,
          detalleReporte.primer_apellido,
          detalleReporte.segundo_apellido,
          detalleReporte.cui,
          detalleReporte.nacionalidad,
          detalleReporte.departamento_nac,
          detalleReporte.municipio_nac,
          detalleReporte.fecha_nac,
          detalleReporte.lugar_poblado,
          detalleReporte.sexo,
          detalleReporte.orientacion_sexual,
          detalleReporte.identidad_genero,
          detalleReporte.estado_civil,
          detalleReporte.escolaridad,
          detalleReporte.pueblo,
          detalleReporte.comunidad_len,
          detalleReporte.condicion_riesgo,
          detalleReporte.motivo_orientacion,
          detalleReporte.control_prenatal,
          detalleReporte.semana_gestacion,
          detalleReporte.orientacion_preprueba,
          detalleReporte.resultados_tamizaje,
          detalleReporte.resultados_prueba_vih,
          detalleReporte.prueba_treponemica,
          detalleReporte.prueba_no_treponemica,
          detalleReporte.resultado_difucion,
          detalleReporte.referencia,
          detalleReporte.uai_ref,
          detalleReporte.observaciones,
          detalleReporte.datetime
        )
      )
        .then((data) => {
          setDetalleReporte({
            responsable: data.responsable,
            tipo_cargo: data.tipo_cargo,
            tipo_servicio: data.tipo_servicio,
            no_hoja: data.no_hoja,
            date: data.date,
            no_orden: data.no_orden,
            dia_consulta: data.dia_consulta,
            primer_nombre: data.primer_nombre,
            segundo_nombre: data.segundo_nombre,
            primer_apellido: data.primer_apellido,
            segundo_apellido: data.segundo_apellido,
            cui: data.cui,
            nacionalidad: data.nacionalidad,
            departamento_nac: data.departamento_nac,
            municipio_nac: data.municipio_nac,
            fecha_nac: data.fecha_nac,
            lugar_poblado: data.lugar_poblado,
            sexo: data.sexo,
            orientacion_sexual: data.orientacion_sexual,
            identidad_genero: data.identidad_genero,
            estado_civil: data.estado_civil,
            escolaridad: data.escolaridad,
            pueblo: data.pueblo,
            comunidad_len: data.comunidad_len,
            condicion_riesgo: data.condicion_riesgo,
            motivo_orientacion: data.motivo_orientacion,
            control_prenatal: data.control_prenatal,
            semana_gestacion: data.semana_gestacion,
            orientacion_preprueba: data.orientacion_preprueba,
            resultados_tamizaje: data.resultados_tamizaje,
            resultados_prueba_vih: data.resultados_prueba_vih,
            prueba_treponemica: data.prueba_treponemica,
            prueba_no_treponemica: data.prueba_no_treponemica,
            resultado_difucion: data.resultado_difucion,
            referencia: data.referencia,
            uai_ref: data.uai_ref,
            observaciones: data.observaciones,
            datetime: data.datetime,
          });

          addToast("La información se ha insertado correctamente.", {
            appearance: "success",
            autoDismiss: true,
          });
          navigateHome();
        })
        .catch((e) => {
          addToast("Ha sucedido un error", {
            appearance: "error",
            autoDismiss: true,
          });
        });
    } else {
      dispatch(updateReporte(detalleReporte.id_reporte, detalleReporte))
        .then(() => {
          addToast("La información se ha actualizado correctamente.", {
            appearance: "info",
            autoDismiss: true,
          });
          navigateHome();
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
        navigateHome();
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
    const id = props.match.params.id;
    if (id) {
      getReporte(id);
      setTipo("Editar");
    } else {
      setTipo("Crear");
    }
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

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid container>
        {!matches && (
          <Grid item xs={12} md={3}>
            <Box
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "100vh",
                paddingTop: "25%",
              }}
            >
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                    <StepContent>
                      {index === 0 ? (
                        <></>
                      ) : (
                        <ButtonComponent
                          label="Regresar"
                          variant="outlined"
                          onClick={handleBack}
                        ></ButtonComponent>
                      )}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
        )}

        <Grid item xs={12} md={9}>
          <div
            style={{
              alignSelf: "center",
              display: "flex",
              height: "100%",
              backgroundColor: "#f5f5f5",
              flexDirection: "column",
            }}
          >
            {tipo === "Editar" ? (
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  marginTop: "3%",
                  marginRight: "5%",
                }}
              >
                <IconButton onClick={handleDelete} aria-label="delete">
                  <DeleteIcon style={{ color: "red" }} />
                </IconButton>
              </div>
            ) : (
              <></>
            )}
            {activeStep === 0 ? (
              <DatosGenerales
                catalogos={catalogos}
                detalleReporte={detalleReporte}
                handleChange={handleChange}
              ></DatosGenerales>
            ) : activeStep === 1 ? (
              <DatosPersonales
                catalogos={catalogos}
                handleSelectChange={handleSelectChange}
                deptos={deptos}
                munis={munis}
                ha
                detalleReporte={detalleReporte}
                handleChange={handleChange}
              ></DatosPersonales>
            ) : activeStep === 2 ? (
              <DatosInformativos
                catalogos={catalogos}
                detalleReporte={detalleReporte}
                handleChange={handleChange}
              ></DatosInformativos>
            ) : activeStep === 3 ? (
              <Observaciones
                detalleReporte={detalleReporte}
                handleChange={handleChange}
              ></Observaciones>
            ) : (
              <> </>
            )}
            {!matches && (
              <Fab
                onClick={activeStep === 3 ? handleCreateOrEdit : handleNext}
                variant="extended"
                style={{
                  position: "absolute",
                  bottom: 15,
                  right: 15,
                  backgroundColor: "lightblue",
                }}
              >
                <KeyboardArrowRight></KeyboardArrowRight>

                {tipo === "Editar"
                  ? activeStep === 3
                    ? "Editar"
                    : "Siguiente"
                  : activeStep === 3
                  ? "Insertar"
                  : "Siguiente"}
              </Fab>
            )}
          </div>
          {matches && (
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={activeStep === 3 ? handleCreateOrEdit : handleNext}
                >
                  {tipo === "Editar"
                    ? activeStep === 3
                      ? "Editar"
                      : "Siguiente"
                    : activeStep === 3
                    ? "Insertar"
                    : "Siguiente"}
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Atras
                </Button>
              }
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const DatosGenerales = ({ catalogos, handleChange, detalleReporte }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <TextField
        style={{
          fontWeight: "bold",
          margin: "3%",
        }}
        variant="h5"
        label="Datos generales:"
      ></TextField>

      <div>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            margin: "3%",
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
                value={detalleReporte.responsable}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
};

const DatosPersonales = ({
  catalogos,
  deptos,
  munis,
  handleSelectChange,
  handleChange,
  detalleReporte,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TextField
        style={{ fontWeight: "bold", margin: "3%" }}
        variant="h5"
        label="Datos personales:"
      ></TextField>

      <div>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            margin: "3%",
          }}
        >
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
              <InputField
                id="dia_consulta"
                name="dia_consulta"
                onChange={handleChange}
                variant="outlined"
                label="Día Consulta"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                value={detalleReporte?.dia_consulta || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <InputField
                id="primer_nombre"
                name="primer_nombre"
                onChange={handleChange}
                variant="outlined"
                label="Primer Nombre"
                value={detalleReporte?.primer_nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <InputField
                id="segundo_nombre"
                name="segundo_nombre"
                onChange={handleChange}
                variant="outlined"
                label="Segundo Nombre"
                value={detalleReporte?.segundo_nombre || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <InputField
                id="primer_apellido"
                name="primer_apellido"
                onChange={handleChange}
                variant="outlined"
                label="Primer Apellido"
                value={detalleReporte?.primer_apellido || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <InputField
                id="segundo_apellido"
                name="segundo_apellido"
                onChange={handleChange}
                variant="outlined"
                label="Segundo Apellido"
                value={detalleReporte?.segundo_apellido || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
              <SelectField
                id="departamento_nac"
                name="departamento_nac"
                onChange={handleSelectChange}
                variant="outlined"
                label="Departamento Nacimiento"
                disabled={
                  detalleReporte?.nacionalidad === "guatemalteca" ? false : true
                }
                opciones={deptos || []}
                value={detalleReporte?.departamento_nac || ""}
              ></SelectField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <SelectField
                id="municipio_nac"
                name="municipio_nac"
                onChange={handleChange}
                variant="outlined"
                disabled={
                  detalleReporte?.nacionalidad === "guatemalteca" ? false : true
                }
                opciones={munis || []}
                label="Municipio Nacimiento"
                value={detalleReporte?.municipio_nac || []}
              ></SelectField>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
              <DateTimePicker
                id="fecha_nac"
                name="fecha_nac"
                onChange={handleChange}
                label="Fecha Nacimiento"
                value={detalleReporte?.fecha_nac || ""}
              ></DateTimePicker>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <InputField
                id="lugar_poblado"
                name="lugar_poblado"
                onChange={handleChange}
                variant="outlined"
                label="Lugar Poblado"
                value={detalleReporte?.lugar_poblado || ""}
              ></InputField>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
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

const DatosInformativos = ({ catalogos, handleChange, detalleReporte }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TextField
        style={{ fontWeight: "bold", margin: "3%" }}
        variant="h5"
        label="Pruebas realizadas: "
      ></TextField>

      <div>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            margin: "3%",
          }}
        >
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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
            <Grid item lg={4} md={6} xs={12}>
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

const Observaciones = ({ handleChange, detalleReporte }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <TextField
        style={{ fontWeight: "bold", margin: "3%" }}
        variant="h5"
        label="Datos Informativos:"
      ></TextField>

      <div>
        <Paper
          style={{
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            margin: "3%",
          }}
        >
          <Grid container style={{ padding: "2%" }} spacing={3}>
            <Grid item xs={12}>
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
