import Navbar from '../components/Navbar';
import { solo_projects, hack_projects } from '../data/projectsData';

function Projects() {
    return (
        <>
            <Navbar />
            <div className="projects">
                <h1>My Projects</h1>
                <h2>Individual Projects</h2>
                {solo_projects.map((data, index) => {
                    return (
                        <div className="project-card" key={index}>
                            <p><strong>Title: </strong>{data.title}</p>
                            <p><strong>Description: </strong>{data.description}</p>
                            <p><strong>Technologies: </strong>{data.technologies}</p>
                            <a href={data.github} target="blank" rel="noreferrer" >GitHub</a>
                            <br></br>
                            <a href={data.demo} target="_blank" rel="noreferrer">Live Site</a>
                        </div>
                    )
                })}

                <h2> Hackathon Projects</h2>
                {hack_projects.map((data, index) => {
                    return (
                        <div className="project-card" key={index}>
                            <p><strong>Title: </strong>{data.title}</p>
                            <p><strong>Description: </strong>{data.description}</p>
                            <p><strong>Technologies: </strong>{data.technologies}</p>
                            <a href={data.github} target="blank" rel="noreferrer" >GitHub</a>
                            <br></br>
                            <a href={data.demo} target="_blank" rel="noreferrer">Live Site</a>
                        </div>
                    )
                })}
            </div >
        </>
    );
}

export default Projects;
