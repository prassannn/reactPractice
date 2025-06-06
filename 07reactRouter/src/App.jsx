import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import { Routes, Route } from 'react-router-dom';
import About from './Component/About/About'
import ContactUs from './Component/ContactUs/ContactUs'
import GitHub from './Component/GitHub/GitHub'
import User from './Component/User/User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/gitHub" element={<GitHub />} />
        <Route path="/user/:id" element={<User />} />
    </Routes>
    <Footer />
    </>
    
  )
}

export default App
