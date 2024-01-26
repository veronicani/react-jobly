import { BrowserRouter } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";

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
  const [signupLoginErrs, setSignupLoginErrs] = useState([]);
  const [loginErrs, setloginErrs] = useState([]);

  /** signUp: Registers the user with the SignUpForm data.
   * On success, receives token, and stores token, user's username,
   *    first name, last name, and email in userData.
   *
   * On failure, recieves error messages, and stores in state to pass to
   * SignUpForm.
   */

  async function signUp(formData) {
    const { username, password, firstName, lastName, email } = formData;
    const response = await JoblyApi
      .registerUser(username, password, firstName, lastName, email);

    if (response.status === "ok") {
      setUserData({
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
    } else {
      setSignupErrs(errs => [...errs, response.errors]);
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

      // if token is good, get user details here

    } else {
      setSignupLoginErrs(errs => [...errs, response.errors]);
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList signUp={signUp} login={login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
