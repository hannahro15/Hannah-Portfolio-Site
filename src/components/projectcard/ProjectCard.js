import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card text-center">
            <h3 id='project-title'><strong>{project.title}</strong></h3>
            {project.status && (
                <p id='project-status'>
                    <em><strong>Status: </strong>{project.status}</em>
                </p>
            )}
            {project.placement && (
                <p id='project-placement'>
                    <em><strong>Placement: </strong>{project.placement}</em>
                </p>
            )}
            {project.image && (
                <img src={project.image} alt={`Screenshot of ${project.title}`} className="project-image" loading="lazy" />
            )}
            <p><strong>Description: </strong>{project.description}</p>
             <div className="tech-badges">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary me-2 mb-2">
                            {tech.replace(',', '').trim()}
                        </span>
                    ))}
            </div>   
            <a className="github-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a className="live-site-link" href={project.demo} target="_blank" rel="noreferrer">Live Site</a>
        </div >
    );
}

export default ProjectCard;
