import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <main className="contact text-center">
            <h1 className="text-center">Contact Me</h1>
            <p className="text-center">If you wish to contact me, please use the form below. Thanks a lot.</p>
            <Form className="contact-form" action="https://formspree.io/f/xjkeydor" method="POST">
                <Form.Group className="mb-3" controlId="name" aria-label="Enter your full name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email" aria-label="Enter your email address">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message" aria-label="Enter your message below">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} name="message" placeholder="Please enter your message here" required />
                </Form.Group>
                <Button className="w-60 btn-primary" type="submit" aria-label="Submit contact form">Submit form</Button>
            </Form>
        </main>
    )
};



export default Contact;
