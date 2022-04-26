import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../components/AppBar";
import MyDocument from "../components/Doc";
import ListReportes from "../components/ListReportes";

const Home = () => {
  const reportes = useSelector(({ state }) => state.reportes);

  return (
    <div
      style={{
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        position: "absolute",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
        <ListReportes></ListReportes>
      </div>

      <PDFDownloadLink
        document={<MyDocument reportes={reportes} />}
        fileName={"Holaaa"}
      >
        {({ loading }) =>
          loading ? <button>Hola</button> : <button>Mundo</button>
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Home;
