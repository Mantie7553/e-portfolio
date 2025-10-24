
import Project from "../components/Project.jsx"
import GameHub from "../assets/GameHub-project.png"
import Construction from "../assets/construction.jpg"
import HCOB from "../assets/hcob.png"

//An array of "project" objects that will be used to render each individual project that will be displayed on this page
const projList = [
    {
        title: "Game Hub",
        img: GameHub,
        description: "A game hub for two educational games",
        skill: "As my first full web project I gained a much better understand of JavaScript, HTML, and CSS",
        reflection: "This project had taught me how working as part of a development team might look and how" +
            " important communication is. It was made apparent during this project I would need to do some more" +
            "work with the technologies I was using to get to the level I want to be at."
    },
    {
        title: "Game Jam - HCOB",
        img: HCOB,
        description: "A Unity game built within 48 hours",
        skill: "Further developed my understanding of Git, versioning, and C#",
        reflection: "I learned how to better handle working with a very short deadline" +
            " and how to allocate work to others. During this project we ran into a lot of issues merging branches" +
            " or pushing stories, but I was able to learn how to better handle merge conflicts and versioning."
    },
    {
        title: "Grant Management System",
        img: Construction,
        description: "A Grant Management System for United Way Saskatoon",
        skill: "Further developed my skills in JavaScript, Python, React, and Git",
        reflection: "I am learning how to break down a very large project into smaller portions that can be worked on." +
            " Taking lead of the team has shown me that I do well keeping tasks organized not only for myself, but for " +
            "the people I am working with."
    },
]

/** Projects Component
 * Returns a React component containing the content for the projects page
 *      Renders the Project components in order of the above array
 * @returns {JSX.Element} - The Projects component
 * @constructor
 */
function Projects() {
    return <div className="base projects" id="base">
        {projList.map((prj, ind) => {
            return <Project project={prj} key={ind}/>
    })}
        <div className="to-top">
            <button className="btn-top" type='button'
            onClick={() => {document.documentElement.scrollTop = 0}}>&#x2B06;</button>
            <p className="roboto small-text">Back to top</p>
        </div>
    </div>
}

export default Projects;