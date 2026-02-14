import { Navigate, Routes, Route } from "react-router-dom";

import SignUpForm from "src/features/auth/SignUpForm/SignUpForm";
import LoginForm from "src/features/auth/LoginForm/LoginForm";
import ProfileForm from "src/features/auth/ProfileForm/ProfileForm";

import Homepage from "src/pages/Homepage/Homepage";
import JobList from "src/features/jobs/JobList/JobList";
import CompanyList from "src/features/companies/CompanyList/CompanyList";
import CompanyDetail from "src/features/companies/CompanyDetail/CompanyDetail";

import { useContext } from "react";
import userContext from "src/context/UserContext";


/** RoutesList: list of routes for Jobly app.
 *
 *  Props: signUp, login
 *
 *  State: none
 *
 *  App -> RoutesList -> { Homepage, CompanyList, JobList, CompanyDetail }
*/

function RoutesList({ signUp, login }) {
  const { user } = useContext(userContext);
  const { username } = user;

  return (
    <div className="RoutesList container h-100 my-auto">
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* if user signed in, these routes available */}
        {username &&
          <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/profile" element={<ProfileForm />} />
          </>
        }

        {/* if no user signed in, these routes available */}
        {!username &&
          <>
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route
              path="/signup"
              element={<SignUpForm
                signUp={signUp} />}
            />
          </>
        }

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}


export default RoutesList;