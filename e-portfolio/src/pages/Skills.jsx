import "./Skills.css";
import Java from "../assets/skill-images/java.jpg"
import Python from "../assets/skill-images/python.jpg"
import Js from "../assets/skill-images/js.jpg"
import Cs from "../assets/skill-images/csharp.jpg"
import Re from "../assets/skill-images/react.png"
import Css from "../assets/skill-images/css3.png"
import Html from "../assets/skill-images/html.png"
import Git from "../assets/skill-images/git.png"
import GitHub from "../assets/link-images/github-logo-black-white.png"
import Node from "../assets/skill-images/node.png"
import MySQL from "../assets/skill-images/mySQL.png"
import Docker from "../assets/skill-images/docker.png"
import Figma from "../assets/skill-images/figma.png"

const coding = [
    {image: Html, title: "html"},
    {image: Css, title: "css"},
    {image: Js, title: "javascript"},
    {image: Re, title: "react"},
    {image: Java, title: "java"},
    {image: Cs, title: "c#"},
    {image: Python, title: "python"},
];

const other = [
    {image: GitHub, title: "github"},
    {image: Git, title: "git"},
    {image: Node, title: "node"},
    {image: MySQL, title: "mySQL"},
    {image: Docker, title: "docker"},
    {image: Figma, title: "figma"},
];

const categories = [coding, other];
const naming = ["Coding","Other Tools"];

/** Skills Component
 *  Returns a React component containing the content for the skills page
 *      Two separate lists are rendered as tables containing an image and a title for each "skill" item
 * @returns {JSX.Element} - The Skills component
 * @constructor
 */
export default function Skills() {
    return <div className="base skills" id="base">
        {categories.map((x,index) => {
            return <table>
                <tbody>
                <tr>
                    <th colSpan={categories[index].length}>
                        <h2 className="racing-sans-one-regular">{naming[index]}</h2>
                    </th>
                </tr>
                <SkillSection category={x}/>
                </tbody>
            </table>
        })
        }
    </div>
}


/** SkillSection Component
 *  Returns a React component containing the content for the Skills component
 *      Renders a list of skills by category into a table row as table data
 * @param category - The category of skills being displayed
 * @returns {JSX.Element} - The SkillSection Component
 * @constructor
 */
function SkillSection({category})
{
    return <tr className="skill-section">
        {category.map((skill) => {
            return (
                <td>
                    <img src={skill.image} alt={skill.title} height="75px"/>
                    <p className="roboto">{skill.title}</p>
                </td>
            )
        })}
    </tr>
}