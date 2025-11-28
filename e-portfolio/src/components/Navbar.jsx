import "../css/Navbar.css";
import LinkedInLogo from "../assets/link-images/linkedin-logo-black-white.png"
import GithubLogo from "../assets/link-images/github-logo-black-white.png"
import EmailLogo from "../assets/link-images/email-logo.png"

/** Navbar component
 *  Returns a React component for the navbar used in the webpage
 * @param page - The name of the page that is currently visible
 * @param setPage - The function for changing the page that is displayed
 * @returns {JSX.Element} - The Navbar component
 * @constructor
 */
function Navbar({page, setPage}) {
    let navClass = page ==='skills' ? 'left' : page ==='projects' ? 'right' : 'middle';
    let bottom = `bottom-${navClass}`;
    let middle = `middle-${navClass}`;
    let top = `top-${navClass}`;

    return <div className="navbar">
        <div className={bottom}>
            <div className={middle}>
                <div className={top}>
                    <nav>
                        <button id="skills" className="bttns racing-sans-one-regular"
                                onClick={() => {setPage('skills')}}>Skills</button>
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