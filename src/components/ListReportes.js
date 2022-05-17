import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanReportes,
  findReportesByDate,
  retrieveReportes,
} from "../store/actions/reportes.actions";
import SearchIcon from "@mui/icons-material/Search";
import PrintIcon from "@mui/icons-material/Print";
import moment from "moment";
import { IconButton } from "@mui/material";
import Doc from "./Doc";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DateTimePicker from "./DatePicker";
import { Link } from "react-router-dom";

const ListReportes = () => {

  const [searchReporte, setSearchReporte] = useState(moment(new Date().getDate(), "DD/MM/YYYY"));

  const dispatch = useDispatch();

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

    if (searchReporte === null) {
      dispatch(retrieveReportes());
    } else {
      dispatch(findReportesByDate(searchReporte));
    }
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
    {
      field: "action",
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: (params) => {
        return (
          <Link
            to={"/reportes/" + params.row.id_reporte}
            className="btn btn-warning btn-sm"
          >
            Editar
          </Link>
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
          margin: "3%",
        }}
      >
        <div style={{ width: "50%" }}>
          <DateTimePicker
            id="date"
            name="date"
            //variant="filled"
            onChange={onChangeSearchReporte}
            label="Buscar por fecha"
            value={searchReporte}
          ></DateTimePicker>
        </div>

        <IconButton
          style={{ marginLeft: "1%" }}
          onClick={findByDates}
          aria-label="search"
        >
          <SearchIcon style={{ color: "blue" }} />
        </IconButton>

        <PDFDownloadLink
          document={<Doc reportes={reportes} />}
          fileName={"ReporteVIH"}
        >
          <IconButton
            style={{ marginLeft: "1%" }}
            aria-label="print"
          >
            <PrintIcon style={{ color: "blue" }} />
          </IconButton>
        </PDFDownloadLink>
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

    </div>
  );
};

export default ListReportes;