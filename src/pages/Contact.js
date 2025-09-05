import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>If you wish to contact me, please use the form below. Thanks a lot.</p>
            <Form className="contact-form" action="https://formspree.io/f/xjkeydor" method="POST">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" name="name" required />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" required />
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} name="message" required />
                </Form.Group>
                <Button className="w-60 text-center" type="submit">Submit form</Button>
            </Form>
        </div>
    )
};



export default Contact;
