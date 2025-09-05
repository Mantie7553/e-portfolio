import "../css/Navbar.css";
import LinkedInLogo from "../assets/linkedin-logo-black-white.png"
import GithubLogo from "../assets/github-logo-black-white.png"
import EmailLogo from "../assets/email-logo-black-white.png"

function Navbar({page, setPage}) {
    let navClass = page ==='resume' ? 'left' : page ==='projects' ? 'right' : 'middle';
    let bottom = `bottom-${navClass}`;
    let middle = `middle-${navClass}`;
    let top = `top-${navClass}`;

    return <div className="navbar">
        <div className={bottom}>
            <div className={middle}>
                <div className={top}>
                    <nav>
                        <button id="resume" className="bttns racing-sans-one-regular"
                                onClick={() => {setPage('resume')}}>Resume</button>
                        <button id="about" className="bttns racing-sans-one-regular"
                                onClick={() => {setPage('about')}}>About Me</button>
                        <button id="projects" className="bttns racing-sans-one-regular"
                                onClick={() => {setPage('projects')}}>Projects</button>
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
export default Navbar;