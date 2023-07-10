import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Copyright from "./components/Copyright";
import TheTeam from "./components/TheTeam";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<TheTeam />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
