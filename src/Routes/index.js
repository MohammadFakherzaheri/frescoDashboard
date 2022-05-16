import React,{Suspense} from "react";
import { Switch,useRouteMatch, Route } from "react-router-dom";
import     Navbar from "../layout/MenuBar";
import { Spin } from 'antd';


const Admin = () => {
//   const { path } = useRouteMatch();

  return (
<>

<Switch>
<Navbar />
    
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
  
      </Suspense>
    </Switch>
</>
    
  );
    }
export default Admin;
