import React from 'react'
import Landing from './Landing'
import AboutOddi from './AboutOddi'
import WhyOddi from './WhyOddi'
import InterestForm from './InterestForm'
import Footer from './Footer'


function Home() {
  return (
    <div>
        <Landing/>
        <AboutOddi/>
        <WhyOddi/>
        <InterestForm/>
        <Footer/>
    </div>
  )
}

export default Home