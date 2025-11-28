import './App.css';
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import {useState} from "react";
import Watermark from "./components/Watermark.jsx";

function App() {
    const [page, setPage] = useState('');
  return (
    <>
        <Navbar page={page} setPage={setPage}/>
        {page === 'skills' ? <Skills/> : page === 'projects' ? <Projects/> : <AboutMe/>}
        <Watermark/>
    </>
  )
}

export default App
