import { BrowserRouter } from "react-router-dom";
import './App.css';

import Navbar from "./Navbar";
import RoutesList from "./RoutesList";

import LoginForm from "./LoginForm";

/** Jobly App.
 *
 * Props: none
 *
 * State: none
 *
 * App -> { Navbar, RoutesList }
 */
function App() {


  function signUp() {

  }





  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
