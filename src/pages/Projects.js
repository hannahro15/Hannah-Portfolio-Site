import ProjectCard from '../components/ProjectCard';
import { solo_projects, hack_projects } from '../data/projectsData';

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>

            <h2>Individual Projects</h2>
            <div className="project-grid">
                {solo_projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <h2>Hackathon Projects</h2>
            <div className="project-grid">
                {hack_projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
