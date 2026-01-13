import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar" aria-label="Main navigation">
            <ul>
                <li><NavLink to="/" aria-label="Home page">Home </NavLink></li>
                <li><NavLink to="/about" aria-label="About page">About</NavLink></li>
                <li><NavLink to="/projects" aria-label="Projects page">Projects</NavLink></li>
                <li><NavLink to="/contact" aria-label="Contact page">Contact</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;
