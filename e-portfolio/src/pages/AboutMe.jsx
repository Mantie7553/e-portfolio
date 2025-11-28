
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
            <h3 className="racing-sans-one-regular">Hello, and Welcome!</h3>
            <p className="roboto">
                I am Jaden Mantie, a full time student at Saskatchewan Polytechnic and an aspiring web developer.<br/>
                Through my time in college I have found a passion for development and actively challenge myself to learn more.<br/>
            </p>
        </section>
    </div>
}

export default AboutMe;