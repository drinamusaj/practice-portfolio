import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Works from './components/Works'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <About />
      <Works setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} />}
      <Footer />
    </BrowserRouter>
  )
}

export default App
