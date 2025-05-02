import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
 
// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Pages 
import Home from './pages/Homepage/Home'
import Portpage from './pages/Portfoliopage/Portpage'
import Hire from './pages/Hire/Hire'


function App() {
  return (
    <>
    <Router>
        <Header className='header' />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Portpage />} />
            <Route path="/Hire" element={<Hire />} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App
