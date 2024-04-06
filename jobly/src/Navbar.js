import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import { useContext } from "react";
import userContext from "./userContext";
import { ReactComponent as JoblyLogo } from "./jobly-logo-color.svg";

/** Navbar: component for Jobly app
 *
 *  Props: logout
 *
 *  State: none
 *
 *  App -> Navbar
 */

function Navbar({ logout }) {

  const { user } = useContext(userContext);
  const { username } = user;

  return (
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container-fluid">
        <NavLink 
          to="/"
          className="Navbar-title navbar-brand d-flex gap-1"
        >
          <JoblyLogo className="me-1"/>
          Jobly
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">

          {/* if user logged in, show this in navbar */}
          {username &&
            <>
              <li className="nav-item"><NavLink to="/companies">Companies</NavLink></li>
              <li className="nav-item"><NavLink to="/jobs">Jobs</NavLink></li>
              <li className="nav-item"><NavLink to="/profile">{username}'s Profile</NavLink></li>
              <li className="nav-item"><a href="/logout" onClick={logout}>Logout</a></li>
            </>
          }

          {/* if user not logged in, show this in navbar */}
          {!username &&
            <>
              <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
              <li className="nav-item"><NavLink to="/signup">Signup</NavLink></li>
            </>
          }
        </ul>
        </div>
        </div>
      </nav>
  );
}


export default Navbar;