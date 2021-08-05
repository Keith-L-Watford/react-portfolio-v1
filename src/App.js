import React from 'react'
import './styles/app.css'
import Header from './components/header.js'
import Nav from './components/nav'
import Projects from './components/pages/projects'
import Contact from './components/pages/contact'
// import Home from './components/pages/home'

function App() {
  return <>
        <Header />
        <Nav />
        <Projects />
        <Contact />
      </>
}

export default App;