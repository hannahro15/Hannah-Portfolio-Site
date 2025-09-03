import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <p id='project-title'><strong>{project.title}</strong></p>
            <p><strong>Description: </strong>{project.description}</p>
            <p><strong>Technologies: </strong>{project.technologies}</p>
            <a className="github-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a className="live-site-link" href={project.demo} target="_blank" rel="noreferrer">Live Site</a>
        </div >
    );
}

export default ProjectCard;
