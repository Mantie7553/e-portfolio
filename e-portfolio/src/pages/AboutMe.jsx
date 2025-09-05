
import "../css/AboutMe.css";
import Me from"../assets/jaden.png";

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
            <p className="roboto">Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text </p>
        </section>
    </div>
}

export default AboutMe;