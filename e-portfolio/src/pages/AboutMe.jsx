
import "../css/AboutMe.css";
import Me from"../assets/jaden.png";

/** AboutMe Component
 *  Returns a React component containing the content for the about page
 * @returns {JSX.Element} - The AboutMe component
 * @constructor
 */
function AboutMe() {
    return <div className="base about" id="base">
        <section className="my-image">
            <h3 className="racing-sans-one-regular">Jaden R. Mantie</h3>
            <div className="border">
                <img className="me" src={Me} alt="Jaden Mantie"/>
            </div>
        </section>
        <section className="text">
            <h3 className="racing-sans-one-regular">About Me</h3>
            <p className="roboto">Hello and welcome! I am a Computer Systems Technology student at Saskatchewan Polytechnic.
            Through my time in school I have developed a love for all things tech, but specifically web development.
             I also enjoy playing video games, watching basket ball, and bowling.</p>
        </section>
    </div>
}

export default AboutMe;