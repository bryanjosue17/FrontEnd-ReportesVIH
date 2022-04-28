import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanDetalleReportes,
  cleanReportes,
  createReportes,
  deleteReporte,
  findReportesByDate,
  retrieveReporte,
  retrieveReportes,
  updateReporte,
} from "../store/actions/reportes.actions";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DialogForm from "./Dialog";
import { useToasts } from "react-toast-notifications";
import ButtonComponent from "./Button";
import InputField from "./InputField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import MyDocument from "./Doc";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { IconButton } from "@mui/material";
import Doc from "./Doc";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ListReportes = () => {
  const [tipo, setTipo] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [searchReporte, setSearchReporte] = useState("");

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const detalleReporte = useSelector(({ state }) => state.detalleReporte);
  const reportes = useSelector(({ state }) => state.reportes);

  useEffect(() => {
    dispatch(retrieveReportes());
  }, [dispatch]);

  const onChangeSearchReporte = (e) => {
    const searchReporte = e.target.value;
    setSearchReporte(searchReporte);
  };

  const refreshData = () => {
    dispatch(cleanReportes());
  };
  const findByDates = () => {
    refreshData();

    if (searchReporte.length < 1) {
      dispatch(retrieveReportes());
    } else {
      dispatch(findReportesByDate(searchReporte));
    }
  };

  const handleClickOpen = () => {
    dispatch(cleanDetalleReportes());
    setOpen(true);
    setTipo("create");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const verDetalleReporte = (id) => {
    dispatch(retrieveReporte(id));
    setOpen(true);
    setTipo("update");
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
          setOpen(false);
        })
        .catch((e) => {
          addToast("Ha sucedido un error", {
            appearance: "error",
            autoDismiss: true,
          });
          setOpen(false);
        });
    } else {
      dispatch(updateReporte(id_reporte, detalleReporte))
        .then(() => {
          addToast("La información se ha actualizado correctamente.", {
            appearance: "info",
            autoDismiss: true,
          });
          setOpen(false);
        })
        .catch((e) => {
          console.log(e);
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
        setOpen(false);
      })
      .catch((e) => {
        addToast("Ha sucedido un error", {
          appearance: "error",
          autoDismiss: true,
        });
        setOpen(false);
      });
  };

  const columns = [
    {
      field: "responsable",
      headerName: "Responsable",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "tipo_cargo",
      headerName: "Tipo cargo",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "tipo_servicio",
      headerName: "Tipo servicio",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "no_hoja",
      headerName: "No. hoja",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Fecha ingreso",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "no_orden",
      headerName: "No. orden",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    /*  {
      field: "dia_consulta",
      headerName: "Día consulta",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "primer_nombre",
      headerName: "Primer nombre",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "segundo_nombre",
      headerName: "Segundo nombre",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "primer_apellido",
      headerName: "Primer apellido",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "segundo_apellido",
      headerName: "Segundo apellido",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cui",
      headerName: "Cui",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "nacionalidad",
      headerName: "Nacionalidad",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "departamento_nac",
      headerName: "Departamento nacimiento",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "municipio_nac",
      headerName: "Muncipio nacimiento",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "departamento_nac",
      headerName: "Departamento nacimiento",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fecha_nac",
      headerName: "Fecha nacimiento",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "lugar_poblado",
      headerName: "Lugar poblado",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "sexo",
      headerName: "Sexo",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "orientacion_sexual",
      headerName: "Orientación sexual",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "identidad_genero",
      headerName: "Identidad género",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "estado_civil",
      headerName: "Estado civil",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "escolaridad",
      headerName: "Escolaridad",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "pueblo",
      headerName: "Pueblo",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "comunidad_len",
      headerName: "Comunidad lingüística",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "condicion_riesgo",
      headerName: "Condición riesgo",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "motivo_orientacion",
      headerName: "Motivo de orientación",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "control_prenatal",
      headerName: "Control prenatal",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "semana_gestacion",
      headerName: "Semana gestación",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "orientacion_preprueba",
      headerName: "Orientación preprueba",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "resultados_tamizaje",
      headerName: "Resultados tamizaje",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "resultados_prueba_vih",
      headerName: "Resultados Prueba VIH",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "prueba_treponemica",
      headerName: "Prueba treponemica",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "prueba_no_treponemica",
      headerName: "Prueba No. treponémica",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "resultado_difucion",
      headerName: "Resultado difucion",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "referencia",
      headerName: "Referencia",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "uai_ref",
      headerName: "UAI ref",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "observaciones",
      headerName: "Observaciones",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "datetime",
      headerName: "Fecha ingreso",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    }, */
    {
      field: "action",
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: (params) => {
        return (
          <ButtonComponent
            onClick={() => verDetalleReporte(params.row.id_reporte)}
            label={"Editar"}
            variant={"outlined"}
          ></ButtonComponent>
        );
      },
      align: "center",
    },
  ];

  return (
    <div
      style={{
        justifyContent: "center",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "50%" }}>
          <InputField
            variant="filled"
            type="text"
            label="Buscar por fecha"
            value={searchReporte}
            onChange={onChangeSearchReporte}
          />
        </div>

        <ButtonComponent
          label="Buscar"
          variant="outlined"
          onClick={findByDates}
        ></ButtonComponent>
      </div>


      <Paper
        style={{
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "3%" }}>
          <TextField variant="h4" label="Listado de reportes"></TextField>
        </div>

        <div style={{ height: 300, width: 900 }}>
          <DataGrid
            rows={reportes || []}
            columns={columns || []}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            getRowId={(row) => row.id_reporte}
          />
        </div>
      </Paper>
      <div
        style={{ display: "flex", bottom: 10, right: 10, position: "absolute" }}
      >
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>

        <DialogForm
          tipo={tipo}
          open={open}
          handleClose={handleClose}
          handleDelete={handleDelete}
          handleCreateOrEdit={handleCreateOrEdit}
        ></DialogForm>
      </div>
    </div>
  );
};

export default ListReportes;
