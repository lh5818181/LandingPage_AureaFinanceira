import React from 'react'
import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ForWhom from './components/ForWhom/ForWhom'
import WhatYouFind from './components/WhatYouFind/WhatYouFind'
import Gallery from './components/Gallery/Gallery'
import HowItWork from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing/Pricing'
import Mentors from './components/Mentors/Mentors'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ForWhom />
      <WhatYouFind />
      <Gallery />
      <HowItWork />
      <Pricing />
      <Mentors />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
