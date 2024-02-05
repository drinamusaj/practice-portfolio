import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Works from './components/Works'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
     <Navbar />
     <Banner />
     <About />
     <Works />
     <Footer />
    </BrowserRouter>
  )
}

export default App
