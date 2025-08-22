import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import backgroundImg from '../assets/background-img.jpg';
import '../pages/Home.css'

function Home() {
    const homeStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    };

    return (
        <>
            <Navbar />
            <div className="home" style={homeStyle}>
                <h1>Welcome to Hannah's Portfolio</h1>
                <h2>Junior Web Developer and Data Professional</h2>
                <p>Click <Link to="/projects"> here </Link>to view my solo and hackathon projects.</p>
            </div>
        </>
    );
}

export default Home;