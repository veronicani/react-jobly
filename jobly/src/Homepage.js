import "./Homepage.scss";
import hero from "./images/hero.jpeg"

import { useContext } from "react";
import userContext from "./userContext";

/** Homepage: component for landing page on Jobly app.
 *
 *  Props: None
 *
 *  Status: None
 *
 *  App -> Homepage
 */

function Homepage() {

  const { user } = useContext(userContext);

  const { username } = user;


  return (
    <div className="Homepage row">
      <div className="col-6 mx-auto my-auto">
      <h1>Jobly</h1>
      <h2>All the jobs in one convenient place.</h2>
      <img 
        className="Homepage-hero-img img-fluid my-2"
        src={hero} 
        alt="Hero illustration of office workers"
      />
      {username && <h4>Welcome, {username}! GET THOSE JOBS!!</h4>}
      </div>
      
    </div>
  );
}

export default Homepage;