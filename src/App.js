import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import CSI from "./Components/CSI";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/CSI" element={<CSI />} />
      </Routes>
    </Router>
  );
}
export default App;
