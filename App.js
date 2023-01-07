import React from "react";

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import Userdashboard from './components/Userdashboard'



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => (
  <div className="App">
  <Router>
    
    <Routes>
    <Route exact path="/"   element={<Home/>} />
    <Route   exact  path="/register"  element={<Register/>} />
    <Route exact path="/login"  element={<Login/>} />
    <Route exact path="/dashboard"  element={<Dashboard/>} />
    <Route exact path="/userdashboard"  element={<Userdashboard/>} />
    <Route   element={<Error/>} />

    </Routes>
 </Router>
 </div>
)

export default App