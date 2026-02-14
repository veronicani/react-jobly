import "./Homepage.scss";
import hero from "src/images/hero.jpeg"

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "src/context/UserContext";
import Button from "src/components/common/Button/Button";

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

  const navigate = useNavigate();

  return (
    <div className="Homepage row m-0">
      <div className="col-12 col-sm-8 col-md-6 mx-auto my-auto">
      <h1>Jobly</h1>
      <h2>All the jobs in one convenient place.</h2>
      <img 
        className="Homepage-hero-img img-fluid my-3"
        src={hero} 
        alt="Hero illustration of office workers"
      />
      {username &&
        <>
        <h4>Welcome, {username}! GET THOSE JOBS!!</h4>
        <Button 
          classes="Homepage-btn my-2"
          label="Browse listings" 
          handleClick={() => navigate("/jobs")}
        />
        </>
      }
      {!username &&
        <div className="d-flex justify-content-center gap-4">
         <Button 
          classes="Homepage-btn"
          label="Sign Up" 
          handleClick={() => navigate("/signup")}
        />
         <Button 
          classes="Homepage-btn"
          label="Login" 
          handleClick={() => navigate("/login")}
        />
        </div>
      }
      </div>
      
    </div>
  );
}

export default Homepage;