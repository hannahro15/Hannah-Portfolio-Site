import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card text-center">
            <h3 id='project-title'><strong>{project.title}</strong></h3>
            {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
            )}
            <p><strong>Description: </strong>{project.description}</p>
            <p><strong>Technologies: </strong>{project.technologies}</p>
            <a className="github-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a className="live-site-link" href={project.demo} target="_blank" rel="noreferrer">Live Site</a>
        </div >
    );
}

export default ProjectCard;
