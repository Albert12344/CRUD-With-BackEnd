import './App.css';
import GetEditDelete from './frontEnd/GetEditDelete';
import {Link, Route, Routes } from "react-router-dom"

function App() {
  return (
      <div className="navbar">
        <Link className='router' to="/home">Home</Link>
        <Link className='router' to="/aboutus">About US</Link>
        <Link className='router' to="/crud">CRUD</Link>
      <Routes>
            <Route path="/crud" element={<GetEditDelete/>} />
      </Routes>
      </div>
  );
}

export default App;
