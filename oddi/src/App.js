import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Copyright from "./components/Copyright";
import TheTeam from "./components/TheTeam";
import UnderConstruction from "./components/UnderConstruction";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<TheTeam />} />
        <Route path="/construccion" element={<UnderConstruction />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
