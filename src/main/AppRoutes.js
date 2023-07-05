import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "../screens/Login";
import Home from "../screens/home/Home";

import AssociateCreate from "../screens/associateCreate/AssociateCreate";
function AppRouts(){
    return(
        <Router>
           <Routes>
                <Route  path="/" element={<Login/>} exact ></Route>
                <Route  path="/home" element={<Home/>} exact ></Route>
                <Route  path="/associateCreate" element={<AssociateCreate/>} exact ></Route>
                <Route  path="/associateUpdate" element={<AssociateCreate/>} exact ></Route>

           </Routes>
        </Router>
    )
}

export default AppRouts;