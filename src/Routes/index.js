// import React,{Suspense,lazy} from "react";
// import { BrowserRouter,useRouteMatch, Route } from "react-router-dom";
// import { Spin } from 'antd';
// import MainDashboard from '../pages/Dashboard/Dashboard'
// import ProjectDetails from '../pages/projects/ProjectDetails'
// import SignleProjects from '../pages/signleProjects/SignleProjects'
// const Admin = () => {
//   const { path } = useRouteMatch();
//   console.log(path,'out side');
//   return (


// <BrowserRouter>
//       <Suspense
//         fallback={
//           <div className="spin">
//             <Spin />
//           </div>
//         }
//       >
        
//         <Route path="/">
//           <Route index element={<MainDashboard />} />
//           <Route path="/projects-details">
//             <Route index element={<ProjectDetails />} />
//             <Route path=":id" element={<SignleProjects />} />
//           </Route>
//         </Route>
//       </Suspense>
//     </BrowserRouter> 
//   );
// }
// export default Admin;
