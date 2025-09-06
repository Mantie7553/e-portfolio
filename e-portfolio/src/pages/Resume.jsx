import "../css/Resume.css";
import Placeholder from "../assets/construction.jpg"

/** Resume Component
 *  Returns a React component containing the content for the about page
 * @returns {JSX.Element} - The Resume component
 * @constructor
 */
export default function Resume() {
    return <div className="base resume" id="base">
        <img className="img-resume" src={Placeholder} alt="My resume"/>
    </div>
}