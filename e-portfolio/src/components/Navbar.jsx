import "../css/Navbar.css";
import LinkedInLogo from "../assets/linkedin-logo-black-white.webp"
import GithubLogo from "../assets/github-logo-black-white.png"
import EmailLogo from "../assets/email-logo-black-white.png"

//TODO Fix image backgrounds, resize images as the screen gets smaller, add spacing between images


function Navbar() {
    return <div className="navbar">
        <div className="bottom-middle">
            <div className="middle-middle">
                <div className="top-middle">
                    <nav>
                        <a href="/">Resume</a>
                        <a href="/">About Me</a>
                        <a href="/">Projects</a>
                    </nav>
                </div>
            </div>
        </div>
        <div className="links">
            <button type="button">
                <img src={LinkedInLogo} alt="linkedin"/>
            </button>
            <button type="button">
                <img src={GithubLogo} alt="github"/>
            </button>
            <button type="button">
                <img src={EmailLogo} alt="email"/>
            </button>
        </div>
    </div>
}

export default Navbar;