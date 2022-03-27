import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./route";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.hoc(route.component)}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
