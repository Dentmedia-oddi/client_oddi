import React from "react";
import Landing from "./Landing";
import AboutOddi from "./AboutOddi";
import WhyOddi from "./WhyOddi";
import InterestForm from "./InterestForm";
import Footer from "./Footer";
import Contributors from "./Contributors";
import Future from "./Future";

function Home() {
  return (
    <div>
      <Landing />
      <AboutOddi />
      <WhyOddi />
      <Future/>
      <div id="interest-form">
      <InterestForm />
      </div>
      <Contributors />
      <Footer />
    </div>
  );
}

export default Home;
