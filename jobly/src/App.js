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
  const [signUpErrs, setSignUpErrs] = useState([]);
  const [loginErrs, setLoginErrs] = useState([]);


  console.log("This is userData: ", userData);
  console.log('This is signUpErrs: ', signUpErrs);

  /** signUp: Registers the user with the SignUpForm data.
   * On success, stores user's username, first name, last name,
   *  and email in userData.
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
      setSignUpErrs(errs => [...errs, response.errors]);
    }
  }

  /** login: Logins the user with the LoginForm data.
   *  On success, user data is saved in state.
   *  On failure, receives error messages, and stores in state to pass to
   *  LoginForm.
  */

  async function login(formData) {
    const { username, password } = formData;
    const { firstName, lastName, email, errors } = (
      await JoblyApi.loginUser(username, password));

    if (firstName) {
      setUserData({
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
    } else {
      setLoginErrs(errs => [...errs, errors]);
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList 
          signUp={signUp}
          login={login}
          signUpErrs={signUpErrs}
          loginErrs={loginErrs}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
