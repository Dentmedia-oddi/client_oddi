import React from "react";
import Navbar from "./components/Navbar";
import AboutOddi from "./components/AboutOddi";
import InterestForm from "./components/InterestForm";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <AboutOddi/>
      <InterestForm/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
