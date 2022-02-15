import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import CSI from "./Components/CSI";
import Navbar from "./Components/Navbar";
function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Login />}/>
<Route path="/CSI" element={<CSI />}/>
<Route path="/Navbar" element={<Navbar/>}/>
</Routes>
</Router>
);
}
export default App;