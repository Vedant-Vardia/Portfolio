import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
import AboutMe from './Components/AboutMe'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      {/* Line Animation */}
    </div>
  )
}

export default App