import "./App.css";
import LeftMenu from "./layout/MenuBar";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
            <LeftMenu />
        <Switch>
          <Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
