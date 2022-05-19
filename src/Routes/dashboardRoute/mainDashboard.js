import React,{lazy,Suspense} from "react";
import {Switch, Route} from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import {Spin} from 'antd'
// const MainDashboard = lazy(()=> import('../../pages/Dashboard'));
import MainDashboard from '../../pages/Dashboard'


const DashboardRoutes = ()=>{
    const {path} = useRouteMatch();
    console.log(path,'inside of dash rout')

    return(
        <Switch>
            <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
            <Route exact path={path}  component={MainDashboard}/>
      </Suspense>
        </Switch>
    )
}
export default DashboardRoutes