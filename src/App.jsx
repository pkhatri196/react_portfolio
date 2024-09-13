import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'
import { useRef } from 'react'

function App() {
   const heroRef = useRef(null);
   const skillsRef = useRef(null);
   const projectsRef = useRef(null);
   const contactRef = useRef(null);
  return (
    <>
    <div>
      <Navbar
        heroRef={heroRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={heroRef}><HeroSection /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
    <Footer/>
    </>
  )
}

export default App
