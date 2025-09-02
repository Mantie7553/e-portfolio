
import "../css/Project.css";

function Project({project}) {
    return <div className="project">
        <img className="prj-image" src={project.img} alt={project.title}/>
        <h3 className="racing-sans-one-regular">Title: {project.title}</h3>
        <p className="roboto">Description: {project.description}</p>
    </div>
}

export default Project;