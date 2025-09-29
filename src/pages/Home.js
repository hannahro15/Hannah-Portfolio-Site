import { Link } from 'react-router-dom';
import '../pages/Home.css';
import profilePic from '../assets/profile-pic.webp';

function Home() {
    return (
        <main className="home">
            <img src={profilePic} alt="Hannah Olbrich, Web Developer" className="profile-pic" />
            <h1>Junior Software Developer</h1>
            <p><em>Passionate web developer with a musical background, delivering creative apps and websites.</em></p>
            <p>Seeking opportunities in Manchester/Remote</p>
            <div className="cta-buttons">
                <Link to="/projects" className="btn btn-secondary">View My Projects</Link>
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
        </main>
    );
}

export default Home;