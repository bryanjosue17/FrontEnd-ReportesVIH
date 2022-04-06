import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/inicio"]} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
