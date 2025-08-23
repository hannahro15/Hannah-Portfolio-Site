import { Link } from 'react-router-dom';
import '../pages/Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Hannah's Portfolio</h1>
            <h2>Junior Web Developer and Data Professional</h2>
            <p>Click <Link to="/projects"> here </Link>to view my solo and hackathon projects.</p>
        </div>
    );
}

export default Home;