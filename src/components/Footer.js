import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/hannaholbrich/" aria-label="LinkedIn Profile">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/hannahro15" aria-label="GitHub Profile">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <p>&copy; 2025 Hannah Olbrich. All rights reserved.</p>
        </footer>
    );
}

export default Footer;