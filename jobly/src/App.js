import { BrowserRouter } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";

import userContext from "src/context/UserContext";

import Navbar from "src/components/layout/Navbar/Navbar";
import RoutesList from "src/routes/RoutesList";
import Footer from 'src/components/layout/Footer/Footer';

import JoblyApi from "src/api";

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
 * State: userData
 *
 * App -> { Navbar, RoutesList }
 */
function App() {
  const [userData, setUserData] = useState({ DEFAULT_USER_DATA });

  useEffect(function getLoginFromLocalStorageOnMount() {
    // console.log("App useEffect for local storage");
    async function getStoredLogin() {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");

     JoblyApi.token = token;
     try {
      const user = await JoblyApi.getUser(username);
      setUserData(user);
     } catch (err) {
      console.log(err);
     }
    }
    getStoredLogin();
  }, []);

  /** signUp: Registers the user with the SignUpForm data.
   * Stores user's username, first name, last name, and email in userData.
   */
  async function signUp({ username, password, firstName, lastName, email }) {
    const token = await JoblyApi
      .registerUser(username, password, firstName, lastName, email);

    const userData = await JoblyApi.getUser(username);
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);

    setUserData({
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });
  }

  /** login: Logins the user with the LoginForm data.
   *  Stores user's username, first name, last name, and email in userData.
   *
  */
  async function login({ username, password }) {
    const token = await JoblyApi.loginUser(username, password);

      const userData = await JoblyApi.getUser(username);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);

    setUserData({
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });
  }

  /** logout: Resets userData to default. */

  function logout() {
    localStorage.clear();
    setUserData(DEFAULT_USER_DATA);
  }

  /** updateUserProfile: 
   * 
  */
  async function updateUserProfile() {
    console.log('TODO: implement!');
  }


  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <userContext.Provider value={{ user: userData }}>
          <Navbar logout={logout} />
          <RoutesList
            signUp={signUp}
            login={login}
          />
          <Footer />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
