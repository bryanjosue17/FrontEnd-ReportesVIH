import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useCollapse from 'react-collapsed';
import Form from "./components/Form";
import Home from "./screens/Home";


function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href={"/inicio"} className="navbar-brand">
          Reportes VIH
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/reportes"} className="nav-link">
              Agregar
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/inicio"]} component={Home} />
          <Route exact path="/reportes" component={Form} />
          <Route path="/reportes/:id" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;