
import React from "react";

import ResponsiveAppBar from "../components/AppBar";

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


    </div>
  );
};

export default Home;
