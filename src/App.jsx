import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
import AboutMe from './Components/AboutMe'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx"; // Correct the file extension case
import About from './pages/About.jsx'




const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  )
}

export default App;