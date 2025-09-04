
import "../css/Project.css";

function Project({project}) {
    return <div className="project">
        <img className="prj-image" src={project.img} alt={project.title}/>
        <section className="prj-text">
            <h3 className="racing-sans-one-regular prj-text"><i>Title:</i> {project.title}</h3>
            <p className="roboto prj-text"><i>Description:</i> {project.description}</p>
        </section>
    </div>
}

export default Project;