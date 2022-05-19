import Admin from './Routes/index'
import React from "react";
import {  BrowserRouter as Router  } from "react-router-dom";
import 'antd/dist/antd.css';
import './static/style.css'
function App() {
  return (
    <>
      <Router>
       <Admin />
      </Router>
    </>
  );
}

export default App;
