import { NavLink } from "react-router-dom";
import "./Navbar.css";

/** Navbar: component for Jobly app
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> Navbar
 */

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <NavLink to="/" className="Navbar-title">Jobly</NavLink>
        <ul>
        <li><NavLink to="/login">ANON Login</NavLink></li>
          <li><NavLink to="/signup">ANON Signup</NavLink></li>
          <li><NavLink to="/companies">Companies</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/profile">USER Profile</NavLink></li>
          <li>USER LOGOUT BTN</li>
        </ul>
      </nav>
    </div>
  )
}


export default Navbar;