import { NavLink } from "react-router-dom";

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
        <NavLink to="/">Jobly</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/companies">Companies</NavLink>
      </nav>
    </div>
  )
}


export default Navbar;