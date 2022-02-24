import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import CSI from "./Components/CSI";
import Navbar from "./Components/Navbar";
import Get from "./Components/Get";
function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Login />}/>
<Route path="/CSI" element={<CSI />}/>
<Route path="/Navbar" element={<Navbar/>}/>
<Route path="/Get" element={<Get/>}></Route>
</Routes>
</Router>
);
}
export default App;