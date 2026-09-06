import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    useEffect(() => {
        document.title = '404 - Page Not Found';
        }, []);

    return (
        <main className="not-found">
            <h1>404</h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </main>
    );
}

export default NotFound;
