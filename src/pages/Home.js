import { Link } from 'react-router-dom';
import '../pages/Home.css';
import profilePic from '../assets/profile-pic.jpg';

function Home() {
    return (
        <main className="home">
            <img src={profilePic} alt="Hannah Olbrich, Web Developer" className="profile-pic" />
            <h2>Junior Web Developer & Data Professional</h2>
            <p>Seeking opportunities in Manchester/Remote</p>
            <p><em>Passionate web developer with a musical background, delivering creative apps and websites.</em></p>
            <div className="cta-buttons">
                <Link to="/projects" className="btn btn-secondary">View My Projects</Link>
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
        </main>
    );
}

export default Home;