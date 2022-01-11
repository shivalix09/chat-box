import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home/Home";
import Login  from "./Component/Login/Login";
import Register from "./Component/Register/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </Router>
    
  
  );
}

export default App;