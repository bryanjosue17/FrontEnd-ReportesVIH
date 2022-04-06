import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanDetallePelicula,
  cleanPeliculas,
  createPelicula,
  deletePelicula,
  deletePeliculas,
  findPeliculasByNombre,
  retrievePelicula,
  retrievePeliculas,
  updatePelicula,
} from "../store/actions/peliculas.actions";
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
  const [searchPelicula, setSearchPelicula] = useState("");

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const detallePelicula = useSelector(({ state }) => state.detallePeliculas);
  const peliculas = useSelector(({ state }) => state.peliculas);

  useEffect(() => {
    dispatch(retrievePeliculas());
  }, [dispatch]);

  const onChangeSearchPelicula = (e) => {
    const searchAgencia = e.target.value;
    setSearchPelicula(searchAgencia);
  };

  const refreshData = () => {
    dispatch(cleanPeliculas());
  };
  const findByPelicula = () => {
    refreshData();

    if (searchPelicula.length < 1) {
      dispatch(retrievePeliculas());
    } else {
      dispatch(findPeliculasByNombre(searchPelicula));
    }
  };

  const handleClickOpen = () => {
    dispatch(cleanDetallePelicula());
    setOpen(true);
    setTipo("create");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const verDetallePelicula = (id) => {
    dispatch(retrievePelicula(id));
    setOpen(true);
    setTipo("update");
  };

  const handleCreateOrEdit = () => {
    const { id_pelicula, nombre, genero, autor, anio, datetime } =
      detallePelicula;

    if (id_pelicula === null) {
      dispatch(createPelicula(nombre, autor, genero, anio, datetime))
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
      dispatch(updatePelicula(id_pelicula, detallePelicula))
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
    dispatch(deletePelicula(detallePelicula.id_pelicula))
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

  const handleDeleteAll = () => {
    dispatch(deletePeliculas())
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
            onClick={() => verDetallePelicula(params.row.id_pelicula)}
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
        backgroundColor: "white",
        height: "100vh",
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
            variante="filled"
            type="text"
            texto="Buscar por agencia"
            value={searchPelicula}
            onChange={onChangeSearchPelicula}
          />
        </div>

        <ButtonComponent
          texto="Buscar"
          variante="outlined"
          onClick={findByPelicula}
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
        <TextField variante="h4" texto="Listado de peliculas"></TextField>

        <div style={{ height: 300, width: 900 }}>
          <DataGrid
            rows={peliculas || []}
            columns={columns || []}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            getRowId={(row) => row.id_pelicula}
          />
        </div>

        <ButtonComponent
          variante="outlined"
          texto="Borrar todo"
          onClick={handleDeleteAll}
        ></ButtonComponent>
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
