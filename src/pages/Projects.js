import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { solo_projects, hack_projects } from '../data/projectsData';

function Projects() {
    return (
        <>
            <Navbar />
            <div className="projects">
                <h1>My Projects</h1>

                <h2>Individual Projects</h2>
                {solo_projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}

                <h2>Hackathon Projects</h2>
                {hack_projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Projects;
