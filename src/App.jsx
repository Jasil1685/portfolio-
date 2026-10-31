import React from 'react'
import "./styles/style.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="about/" element={<About />}></Route>
        <Route path="skills/" element={<Skills />}></Route>
        <Route path="projects/" element={<Projects />}></Route>
        <Route path="contact/" element={<Contact />}></Route>
        <Route path="education/" element={<Education />}></Route>
        <Route path="footer/" element={<Footer />}></Route>
      </Routes>
    </BrowserRouter>
        
  )
}

export default App
