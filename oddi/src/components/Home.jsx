import React from "react";
import Landing from "./Landing";
import AboutOddi from "./AboutOddi";
import WhyOddi from "./WhyOddi";
import InterestForm from "./InterestForm";
import Footer from "./Footer";
import Contributors from "./Contributors";

function Home() {
  return (
    <div>
      <Landing />
      <AboutOddi />
      <WhyOddi />
      <InterestForm />
      <Contributors />
      <Footer />
    </div>
  );
}

export default Home;