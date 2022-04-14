import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import ResponsiveAppBar from "../components/AppBar";
import MyDocument from "../components/Doc";
import ListReportes from "../components/ListReportes";

const Home = () => {
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

      <PDFDownloadLink document={<MyDocument />} fileName={"Holaaa"}>
        {({ loading }) =>
          loading ? <button>Holas</button> : <button>JMundos</button>
        }
      </PDFDownloadLink>

    </div>
  );
};

export default Home;
