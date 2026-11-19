import { useEffect } from 'react';
import './Projects.css';
import ProjectCard from '../../components/projectcard/ProjectCard';
import { solo_projects, open_source_projects, hack_projects } from '../../data/projectsData';

function Projects() {
    useEffect(() => {
        document.title = 'Projects - Hannah Olbrich';
        }, []);

    return (
        <main className="text-center">
            <h1 id="projects-title">My Projects</h1>
            <section>
                <h2>Individual Projects</h2>
                <div className="projects-grid">
                {solo_projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                </div>
            </section>
            <section>
                <h2>Hackathon Projects</h2>
                <div className="projects-grid">
                {hack_projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                </div>
            </section>
            <section>
                <h2>Open Source Projects</h2>
                <p className="section-intro">Projects I maintain in the open. Contributions are welcome; look for issues labelled good first issue or help wanted.</p>
                <div className="projects-grid">
                {open_source_projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;
