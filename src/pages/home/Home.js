import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from '../../assets/profile-pic.webp';

function Home() {
    useEffect(() => {
        document.title = 'Hannah Olbrich - Full Stack Developer';
        }, []);

    return (
        <main className="home">
            <img src={profilePic} alt="Photo of Hannah Olbrich" fetchPriority="high" className="profile-pic" />
            <h1>Hannah Olbrich</h1>
            <p className="subtitle">Full-Stack Developer</p>
            <p><em>I build web apps with React, Python and Django, bringing a musician's attention to detail.</em></p>
            <p>Looking for junior developer roles in Manchester or remote.</p>
            <div className="cta-buttons">
                <Link to="/projects" className="btn btn-secondary">View My Projects</Link>
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
        </main>
    );
}

export default Home;