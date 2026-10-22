import { useEffect } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    useEffect(() => {
        document.title = 'Contact - Hannah Olbrich';
        }, []);

    return (
        <main className="contact text-center">
            <h1>Contact Me</h1>
            <p>If you wish to contact me, please use the form below. Thanks a lot.</p>
            <Form className="contact-form" action="https://formspree.io/f/xjkeydor" method="POST">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} name="message" placeholder="Please enter your message here" required />
                </Form.Group>
                <Button className="btn-primary" type="submit">Submit form</Button>
            </Form>
            <p className="privacy-note">
                Your message is sent via Formspree and only used to reply to you.
                See <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree's privacy policy</a>.
            </p>
        </main>
    )
};



export default Contact;
