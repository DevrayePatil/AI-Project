import './App.css';
import Registration from './Registration';
import  Login  from "./Login";
import  Dashboard  from "./Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
