import ProjectCard from './ProjectCard';
import { solo_projects, hack_projects } from '../../data/projectsData';

function Projects() {
    return (
        <main className="projects text-center">
            <h1>My Projects</h1>
            <section>
                <h2>Individual Projects</h2>
                <div className="project-grid">
                {solo_projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                </div>
            </section>
            <section>
                <h2>Hackathon Projects</h2>
                <div className="project-grid">
                {hack_projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;
