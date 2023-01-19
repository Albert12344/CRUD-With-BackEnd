import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import GetEditDelete from './frontEnd/GetEditDelete';
import Css from "./frontEnd/Css";

function App() {
  return (
      <div className="App">
          <GetEditDelete/>
          <Css/>
      </div>
  );
}

export default App;
