import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
 
// Components
import Header from './features/header/Header';
import Footer from './features/footer/Footer';

// Pages 
import Home from './pages/Homepage/Home';
import Portpage from './pages/Portfoliopage/Portpage';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/404/PageNotFound';
import UpButton from './components/upButton/UpButton';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portpage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <UpButton />
    </Router>
    </>
  )
}

export default App
