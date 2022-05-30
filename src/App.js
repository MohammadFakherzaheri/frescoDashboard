import Admin from './Routes/index'
import React,{Suspense} from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import MainDashboard from './pages/Dashboard/Dashboard'
import ProjectDetails from './pages/projects/ProjectDetails'
import SignleProjects from './pages/signleProjects/SignleProjects'
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import './static/style.css'
function App() {
  return (
    <>

      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
        >
        <Routes>
        <Route path="/">
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="projects-details">
            <Route index element={<ProjectDetails />} />
            <Route path=":id" element={<SignleProjects />} />
          </Route>
        </Route>
        </Routes>
      </Suspense>

    </>
  );
}

export default App;
