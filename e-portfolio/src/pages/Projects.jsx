
import Project from "../components/Project.jsx"
import GameHub from "../assets/GameHub-project.png"
import Construction from "../assets/construction.jpg"

const projList = [
    {
    title: "Game Hub",
    img: GameHub,
    description: "A game hub for two educational games"
    },
    {
        title: "Grant Management System",
        img: Construction,
        description: "This project is currently under development. Will be added once there is a project to show."
    },
    {
        title: "Unknown",
        img: Construction,
        description: "Lots more coming. Come back later to see more..."
    },
    {
        title: "Unknown",
        img: Construction,
        description: "Lots more coming. Come back later to see more..."
    }
]

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