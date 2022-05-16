import Admin from './Routes/index'
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <Router>
            <Admin />
        <Switch>
          <Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
