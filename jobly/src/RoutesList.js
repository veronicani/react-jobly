import { Navigate, Routes, Route } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";

import Homepage from "./Homepage";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";


/** RoutesList: list of routes for Jobly app.
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> RoutesList -> { Homepage, CompanyList, JobList, CompanyDetail }
*/

function RoutesList({ signUp, login, signUpErrs }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />

      <Route path="/login" element={<LoginForm login={login}/>} />
      <Route path="/signup" element={<SignUpForm signUp={signUp} signUpErrs={signUpErrs}/>} />
      <Route path="/profile" element={<ProfileForm />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}


export default RoutesList;