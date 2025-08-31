
function Project(project) {
    return <div>
        <img src={project.image} alt={project.title}/>
        <h3>Title: {project.title}</h3>
        <p>Description: {project.description}</p>
    </div>
}

export default Project;