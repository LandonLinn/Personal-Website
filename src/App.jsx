import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
 
// Components
import Header from './features/header/Header'
import Footer from './features/footer/Footer'

// Pages 
import Home from './pages/Homepage/Home'
import Portpage from './pages/Portfoliopage/Portpage'
import Hire from './pages/Hire/Hire'
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portpage />} />
            <Route path="/Hire" element={<Hire />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App
