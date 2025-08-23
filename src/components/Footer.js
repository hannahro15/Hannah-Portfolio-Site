import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/hannaholbrich/" className="fa fa-linkedin" aria-label="LinkedIn Profile">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/hannahro15" className="fa fa-github" aria-label="GitHub Profile">
                <i className="fab fa-github"></i>
            </a>
            <p>&copy; 2025 Hannah Olbrich. All rights reserved.</p>
        </footer>
    );
}

export default Footer;