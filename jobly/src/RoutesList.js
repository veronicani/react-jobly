import { Navigate, Routes, Route } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";

import Homepage from "./Homepage";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";

import { useContext } from "react";
import userContext from "./userContext";


/** RoutesList: list of routes for Jobly app.
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> RoutesList -> { Homepage, CompanyList, JobList, CompanyDetail }
*/

function RoutesList({ signUp, login, logout, signUpErrs, loginErrs }) {

  const { user } = useContext(userContext);

  const { username } = user;

  return (
    <div className="RoutesList">
      <Routes>
        {/* can add homepage here */}
        {!username &&
          <>
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/login" element={<LoginForm login={login}/>} />
            <Route 
              path="/signup"
              element={<SignUpForm
                signUp={signUp}
                logout={logout} />}
            />
          </>
        }
      </Routes>
    </div>



    // {username && (
    //   <Routes>
    //     <Route path="/companies" element={<CompanyList />} />
    //     <Route path="/companies/:handle" element={<CompanyDetail />} />
    //     <Route path="/jobs" element={<JobList />} />
    //     <Route path="/profile" element={<ProfileForm />} />
    //   </Routes>
    // )}

    // {!user.username &&
    //   <Routes>
    //       <Route
    //       path="/login"
    //       element={<LoginForm
    //       login={login}
    //       loginErrs={loginErrs}/>}
    //     />
    //     <Route
    //       path="/signup"
    //       element={<SignUpForm
    //       signUp={signUp}
    //       logout={logout}
    //       signUpErrs={signUpErrs}/>}
    //     />
    //     </Routes>
    // }
    // <Route path="/" element={<Homepage />} />
    //
    // <Route path="*" element={<Navigate to={"/"} />} />
  );
}


export default RoutesList;;;