import { useState } from 'react'
import './App.css'
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import SignUp from './pages/signup/SignUp.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
      <Route path="/:id" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  
  )
}

export default App;
