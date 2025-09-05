import './css/App.css';
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import {useState} from "react";

function App() {
    const [page, setPage] = useState('');
  return (
    <>
        <Navbar page={page} setPage={setPage}/>
        {page === 'resume' ? <Resume/> : page === 'projects' ? <Projects/> : <AboutMe/>}
    </>
  )
}

export default App
