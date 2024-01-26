import { BrowserRouter } from "react-router-dom";
import './App.css';

import Navbar from "./Navbar";
import RoutesList from "./RoutesList";

import LoginForm from "./LoginForm";
import JoblyApi from "./api";

const DEFAULT_USER_DATA = {
  token: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
}

/** Jobly App.
 *
 * Props: none
 *
 * State: none
 *
 * App -> { Navbar, RoutesList }
 */
function App() {
  const [userData, setUserData] = useState({DEFAULT_USER_DATA});
  const [signupLoginErrs, setSignupLoginErrs] = useState([]);

  /** signUp: Registers the user with the SignUpForm data. 
   * On success, receives token, and stores token, user's username,
   *    first name, last name, and email in userData.
   * 
   * On failure, recieves error messages, and stores in state to pass to
   * SignUpForm.
   *    
  */

  async function signUp(formData) {
    const { username, password, firstName, lastName, email } = formData;
    const response = await JoblyApi
      .registerUser(username, password, firstName, lastName, email);

    if (response.token) {
      setUserData(uData => ({
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        token: receivedToken,
      }));
    } else {
      setSignupLoginErrs(errs => [...errs, response.errors]);
    }
  }

  /** login:  */
  async function login(formData) {
    const { username, password } = formData;
  }








  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList handleSignUp={signUp}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
