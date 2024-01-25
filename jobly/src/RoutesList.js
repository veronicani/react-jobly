import { Navigate, Routes, Route } from "react-router-dom";

import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Homepage from "./Homepage";


/** RoutesList: list of routes for Jobly app.
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> RoutesList -> { Homepage, CompanyList, JobList, CompanyDetail }
*/

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />

      <Route path="/login" element={<LoginForm />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}


export default RoutesList;