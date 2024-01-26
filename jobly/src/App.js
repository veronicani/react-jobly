import { BrowserRouter } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";

import userContext from "./userContext";


import Navbar from "./Navbar";
import RoutesList from "./RoutesList";

import LoginForm from "./LoginForm";
import JoblyApi from "./api";

const DEFAULT_USER_DATA = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Jobly App.
 *
 * Props: none
 *
 * State: none
 *
 * App -> { Navbar, RoutesList }
 */
function App() {
  const [userData, setUserData] = useState({ DEFAULT_USER_DATA });

  console.log("App userData state: ", userData);

  /** signUp: Registers the user with the SignUpForm data.
   * Stores user's username, first name, last name, and email in userData.
   */

  async function signUp(formData) {
    const { username, password, firstName, lastName, email } = formData;
    await JoblyApi
      .registerUser(username, password, firstName, lastName, email);

    setUserData({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  }

  /** login: Logins the user with the LoginForm data.
   *  Stores user's username, first name, last name, and email in userData.
   *
  */

  async function login(formData) {


    const { username, password } = formData;
    console.log('top of login fn, username, password: ', username, password)


    const { firstName, lastName, email } = (
      await JoblyApi.loginUser(username, password));

    console.log("After JoblyApi login fn: ", firstName, lastName, email);

    setUserData({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  }

  /** logout: Resets userData to default. */

  function logout() {
    setUserData(DEFAULT_USER_DATA);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user: userData }}>
          <Navbar />
          <RoutesList
            signUp={signUp}
            login={login}
            logout={logout}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
