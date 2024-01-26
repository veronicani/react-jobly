import { BrowserRouter } from "react-router-dom";
import './App.css';

import Navbar from "./Navbar";
import RoutesList from "./RoutesList";

import LoginForm from "./LoginForm";
import JoblyApi from "./api";

/** Jobly App.
 *
 * Props: none
 *
 * State: none
 *
 * App -> { Navbar, RoutesList }
 */
function App() {
  const [userData, setUserData] = useState({
    token: "",

  })

  async function signUp(formData) {
    const { username, password, firstName, lastName, email } = formData
    const receivedToken = await JoblyApi
      .registerUser(username, password, firstName, lastName, email);

    setUserData(uData => ({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      token: receivedToken,
    }));

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
