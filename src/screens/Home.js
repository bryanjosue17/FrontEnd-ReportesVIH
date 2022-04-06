import React from "react";
import ResponsiveAppBar from "../components/AppBar";
import ListReportes from "../components/ListReportes";

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
        <ListReportes></ListReportes>
      </div>
    </div>
  );
};

export default Home;
