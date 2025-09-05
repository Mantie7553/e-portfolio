import "../css/Resume.css";
import Placeholder from "../assets/construction.jpg"

export default function Resume() {
    return <div className="base resume" id="base">
        <img className="img-resume" src={Placeholder} alt="My resume"/>
    </div>
}