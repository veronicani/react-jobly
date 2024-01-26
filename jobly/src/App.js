import { BrowserRouter } from "react-router-dom";
import './App.css';

import Navbar from "./Navbar";
import RoutesList from "./RoutesList";

import LoginForm from "./LoginForm";
import JoblyApi from "./api";

const DEFAULT_USER_DATA = {
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
  // const [storedToken, setStoredToken] = useState("");
  const [signupLoginErrs, setSignupLoginErrs] = useState([]);


  // On every token state change, makes a new request to Jobly API to get new
  // user data. Updates the user data state to reflect new logged in user.
  useEffect(function fetchNewUserOnTokenChange() {
    async function fetchNewUser() {
      const { user } = await JoblyApi.getUser(username);
      setUserData(uData => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }));
    }
    fetchNewUser();
  }, [storedToken]);
  // TODO: do this work in signup/login

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
      setStoredToken(response.token);
      // TODO: don't need previous state
      // TODO: can fetch user data here and set state
    } else {
      setSignupLoginErrs(errs => [...errs, response.errors]);
    }
  }

  /** login: Logins the user with the LoginForm data.
   *  On success, receives token.
   *  On failure, receives error messages, and stores in state to pass to
   *  LoginForm.
  */

  async function login(formData) {
    const { username, password } = formData;
    const response = await JoblyApi.loginUser(username, password);

    if (response.token) {
      // setStoredToken(currToken => currToken = response.token);
      // JoblyApi.token = response.token;
      // TODO: can store token in class instead of keeping it in state
      // setUs
    } else {
      setSignupLoginErrs(errs => [...errs, response.errors]);
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList handleSignUp={signUp} handleLogin={login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
