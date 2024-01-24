import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import RoutesList from "./RoutesList";
import './App.css';

function App() {
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
