import "../css/Navbar.css";
import LinkedInLogo from "../assets/linkedin-logo-black-white.png"
import GithubLogo from "../assets/github-logo-black-white.png"
import EmailLogo from "../assets/email-logo-black-white.png"

function Navbar() {
    return <div className="navbar">
        <div className="bottom-middle">
            <div className="middle-middle">
                <div className="top-middle">
                    <nav>
                        <a href="/" className="racing-sans-one-regular"
                           onClick={() => {handlePage('resume')}} id="resume">Resume</a>
                        <a href="/" className="racing-sans-one-regular"
                           onClick={() => {handlePage('about')}} id="about">About Me</a>
                        <a href="/" className="racing-sans-one-regular"
                           onClick={() => {handlePage('projects')}} id="projects">Projects</a>
                    </nav>
                </div>
            </div>
        </div>
        <nav className="links">
            <a href="https://www.linkedin.com/in/jaden-mantie-456120358">
                <div className="image-max">
                    <img src={LinkedInLogo} alt="linkedin"/>
                </div>
            </a>
            <a href="https://github.com/Mantie7553">
                <div className="image-max">
                    <img src={GithubLogo} alt="github"/>
                </div>
            </a>
            <a href="mailto:mantie7553@saskpolytech.ca?subject=About your portfolio">
                <div className="image-max">
                    <img src={EmailLogo} alt="email"/>
                </div>
            </a>
        </nav>
    </div>
}

function handlePage(id) {
    switch (id) {
        case 'resume' : document.getElementById('resume').style.color = 'white';
            break;
        case 'about' : document.getElementById('about').style.color = 'white';
            break;
        case 'projects' : document.getElementById('projects').style.color = 'white';
            break;
    }
}

export default Navbar;