import '../App.css';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <div className="App">
                <h1>Welcome to My Portfolio</h1>
                <p>This is the home page of my portfolio site.</p>
            </div>
        </>
    );
}

export default Home;