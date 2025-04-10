import React from 'react'
import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ForWhom from './components/ForWhom/ForWhom'
import WhatYouFind from './components/WhatYouFind/WhatYouFind'
import Gallery from './components/Gallery/Gallery'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ForWhom />
      <WhatYouFind />
      <Gallery />
    </>
  )
}

export default App
