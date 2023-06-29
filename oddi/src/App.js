import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutOddi from "./components/AboutOddi";
import InterestForm from "./components/InterestForm";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Copyright from "./components/Copyright";
import WhyOddi from "./components/WhyOddi";
import TheTeam from "./components/TheTeam";

function App() {
  return (
    <div>

    <div>
      <Navbar />
      <Landing />
      <AboutOddi />
      <WhyOddi />
      <InterestForm />
      <Footer />
      <Copyright />

      
    </div>

    <Routes>
        <Route path="/equipo" element={<TheTeam />} />
      </Routes>
    </div>
  );
}

export default App;
