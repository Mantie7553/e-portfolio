
import Project from "../components/Project.jsx"
import GameHub from "../assets/GameHub-project.png"
import Construction from "../assets/construction.jpg"
import HCOB from "../assets/HCOB-project.png"

//An array of "project" objects that will be used to render each individual project that will be displayed on this page
const projList = [
    {
        title: "Game Hub",
        img: GameHub,
        description: "A game hub for two educational games",
        skill: "As my first full web project I gained a much better understand of JavaScript, HTML, and CSS",
        reflection: "This project was my first real try at a larger scale website and working as part of a team to code" +
            "that website. We were tasked with creating a website for educational games that SaskPolytech could use" +
            "to drive engagement. As it was my first experience working as part of a coding group I learned to better " +
            "communicate what the code I write does in comments and how it can be used. I also spent a lot of that time" +
            "learning how to write tests and what I should actually be testing."
    },
    {
        title: "Game Jam - HCOB",
        img: HCOB,
        description: "A Unity game built within 48 hours",
        skill: "Further developed my understanding of Git, versioning, and C#",
        reflection: "I was a part of a team of 6 that worked to create a game in Unity in under 48 hours." +
            "The theme for this Game Jam was 'Bring the Heat', so our group decided to make a top down" +
            "chicken delivery game. The goal was quite lofty but we were determined to make something cool." +
            "Throughout the project we dealt with many issues when merging branches into main and fixing the conflicts" +
            "those merges caused. I also got my first chance to work with C# during this project so I was able to see" +
            "the differences in how code is written in different languages."
    },
    {
        title: "Grant Management System",
        img: Construction,
        description: "A Grant Management System for United Way Saskatoon",
        skill: "Further developing my skills in JavaScript, Python, React, and Git",
        reflection: "This is the largest project I have worked on so far. We are creating a Grant Management system" +
            "that will allow employees of United Way to view information related to the grants they give out, report" +
            "on any of the information from the grants, and uploading or storage of any past data." +
            " As we have worked through this project I have realized how important it is to break up the work we do" +
            " into smaller pieces that are more manageable for a single person. Looking at how much functionality we are" +
            " being asked to deliver it seemed like there would be no way to produce all of it but as a team we have made" +
            " great progress. My role as part of this team has been to make sure that things are completed on time" +
            " and I have found that it is a good fit for the type of work I like to do."
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