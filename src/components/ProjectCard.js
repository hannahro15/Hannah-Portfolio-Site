import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <p><strong>Title: </strong>{project.title}</p>
            <p><strong>Description: </strong>{project.description}</p>
            <p><strong>Technologies: </strong>{project.technologies}</p>
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a href={project.demo} target="_blank" rel="noreferrer">Live Site</a>
        </div>
    );
}

export default ProjectCard;
