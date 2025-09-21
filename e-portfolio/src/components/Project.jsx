import "../css/Project.css";

/** Project Component
 *  Returns a React component for a project card that will be displayed in the projects page
 * @param project - an object with properties related to each project, those being:
 *      - project.img (the image path for a still image of the project)
 *      - project.title (the name of the project)
 *      - project.description (a short description of the project)
 *      - project.reflection (more detail on what I learned during the project)
 * @returns {JSX.Element} - The Project component
 * @constructor
 */
function Project({project}) {
    return <div className="project">
        <img className="prj-image" src={project.img} alt={project.title}/>
        <section className="prj-text">
            <h3 className="racing-sans-one-regular prj-text"><i>Title:</i> {project.title}</h3>
            <p className="roboto prj-text"><i>Description:</i> {project.description}</p>
        </section>
        <div className="hide">
            <p className="roboto prj-text">{project.skill}</p>
            <p className="roboto prj-text">{project.reflection}</p>
        </div>
    </div>
}

export default Project;