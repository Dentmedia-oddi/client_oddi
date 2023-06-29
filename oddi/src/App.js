import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
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
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
