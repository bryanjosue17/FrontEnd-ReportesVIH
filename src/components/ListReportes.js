import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanDetalleReportes,
  cleanReportes,
  createReportes,
  deleteReporte,
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
import { Grid } from "@mui/material";

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
  const findByDate = () => {
    refreshData();

    if (searchReporte.length < 1) {
      dispatch(retrieveReportes());
    } else {
      dispatch(findByDate(searchReporte));
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
      field: "nombre",
      headerName: "Nombre",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "autor",
      headerName: "Autor",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "genero",
      headerName: "Género",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "anio",
      headerName: "Año",
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
    },
    {
      field: "action",
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: (params) => {
        return (
          <button
            onClick={() => verDetalleReporte(params.row.id_reporte)}
            className="btn btn-warning btn-sm"
          >
            Editar
          </button>
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
            label="Buscar por agencia"
            value={searchReporte}
            onChange={onChangeSearchReporte}
          />
        </div>

        <ButtonComponent
          label="Buscar"
          variant="outlined"
          onClick={findByDate}
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
        <TextField variant="h4" label="Listado de reportes"></TextField>

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
