import '../App.css';
import Navbar from '../components/Navbar';

const solo_projects = [
    {
        title: "Ready, Steady, Eat",
        description: "A fake e-commerce food delivery store",
        technologies: ["HTML, ", "CSS, ", "JavaScript, ", "JQuery, ", "Bootstrap, ", "Python, ", "Django "],
        github: "https://github.com/hannahro15/ready-steady-eat",
        demo: "https://ready-steady-eat-8febfd678f9f.herokuapp.com/"
    },
    {
        title: "Theme Parks Ride Reviews Site",
        description: "A theme park ride reviews site based on a few theme parks in the UK.",
        technologies: ["HTML, ", "CSS, ", "Bootstrap, ", "Python, ", "Flask, ", "MongoDB "],
        github: "https://github.com/hannahro15/Theme-park-ride-reviews-site",
        demo: "https://theme-park-reviews-website-f1f235eaa19d.herokuapp.com/"
    },
    {
        title: "Manchester Tourist Site",
        description: "A site for Manchester tourists with featuring a memory game on it.",
        technologies: ["HTML, ", "CSS, ", "Bootstrap, ", "JavaScript "],
        github: "https://github.com/hannahro15/Manchester-Tourist-Project",
        demo: "https://hannahro15.github.io/Manchester-Tourist-Project/"
    },
    {
        title: "Manchester Cattery",
        description: "A fake cattery business based in Manchester (that doesn't exist).",
        technologies: ["HTML, ", "CSS, ", "Bootstrap "],
        github: "https://github.com/hannahro15/Cattery-project",
        demo: "https://hannahro15.github.io/Cattery-project/"
    }
];

const hack_projects = [
    {
        title: "Dating Events",
        description: "A site for dating events around the UK as part of the Love.exe hackathon.",
        technologies: ["HTML, ", "CSS, ", "Tailwind, ", "Django "],
        github: "https://github.com/hannahro15/CI-Feb25-hackathon",
        demo: "https://dating-events-app-512687071453.herokuapp.com/"
    },
    {
        title: "Script to Sound",
        description: "A text to speech appp built as part of the accessibility hackathon.",
        technologies: ["HTML, ", "CSS, ", "JavaScript "],
        github: "https://github.com/hannahro15/Nov24Hackathon",
        demo: "https://script-to-sound-f697c5a0720c.herokuapp.com/"
    }
]

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
