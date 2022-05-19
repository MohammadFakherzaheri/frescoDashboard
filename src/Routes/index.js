import React,{Suspense,lazy} from "react";
import { Switch,useRouteMatch, Route } from "react-router-dom";
// import Navbar from "../layout/MenuBar";
import WithDashboardLayout from '../layout/WithDashboardLayout'
import { Spin } from 'antd';

const AdminDashboard = lazy(()=> import ('../Routes/dashboardRoute/mainDashboard'));

const Admin = () => {
  const { path } = useRouteMatch();
  console.log(path,'out side');
  return (


<Switch>
    {/* <Navbar /> */}
    <WithDashboardLayout />
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        {/* <Route exact path={`${path}}`} element = {WithDashboardLayout}/> */}
        <Route path={`${path}/`} component={AdminDashboard}/>
        <Route path={`${path}/project-detail`} component={AdminDashboard}/>
      </Suspense>
    </Switch> 
  );
}
export default Admin;
