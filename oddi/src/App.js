import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Copyright from "./components/Copyright";
import TheTeam from "./components/TheTeam";
import UnderConstruction from "./components/UnderConstruction";
import CookieConsent from "react-cookie-consent";

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

      <CookieConsent
        location="bottom"
        //"Accept button"
        buttonText="Acepto"
        cookieName="myCookieConsent"
        style={{ background: "#EEEDED", fontSize: "13px", color: "#000000" }}
        buttonStyle={{
          color: "#FFFFFF",
          fontSize: "14px",
          background: "#250E62",
          borderRadius: "2px",
        }}
        expires={150}
        //"Don't accept button"
        enableDeclineButton
        declineButtonText="No acepto"
        declineButtonStyle={{
          background: "#1DCAD3",
          color: "#000000",
          fontSize: "14px",
          borderRadius: "2px",
        }}
      >
        Utilizamos cookies para mejorar la experiencia del usuario. Al hacer
        clic en "Acepto", aceptas el uso de TODAS las cookies.{" "}
        <span style={{ fontSize: "10px", color: "#250E62" }}>ODDI</span>
      </CookieConsent>
    </div>
  );
}

export default App;
