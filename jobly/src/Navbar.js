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
        <ul>
          <li><NavLink to="/">Jobly</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/companies">Companies</NavLink></li>
        </ul>

      </nav>
    </div>
  )
}


export default Navbar;