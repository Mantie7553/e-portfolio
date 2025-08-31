import { useState } from 'react'
import './css/App.css';
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/AboutMe.jsx";

function App() {
  return (
    <>
        <Navbar/>
        <AboutMe/>
    </>
  )
}

export default App
