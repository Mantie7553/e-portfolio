
import Project from "../components/Project.jsx"

function Projects() {
    return <div className="base">
        <Project project={ {
            title: "First Project",
            img: "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
            description: "This is a sample project"
        }} />
    </div>
}

export default Projects;