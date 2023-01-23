import './App.css';
import GetEditDelete from './frontEnd/GetEditDelete';
import {Link, Route, Routes } from "react-router-dom"
import Home from './frontEnd/Home';

function App() {
  return (
      <div className="navbar">
        <Link className='router' to="/home">Home</Link>
        <Link className='router' to="/aboutus">About us</Link>
        <Link className='router' to="/crud">CRUD</Link>
        <Routes>
          <Route path="/crud" element={<GetEditDelete/>} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
