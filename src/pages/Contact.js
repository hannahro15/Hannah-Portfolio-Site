import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>If you wish to contact me please use the form below. Thanks a lot.</p>
            <form
                action="https://formspree.io/f/xjkeydor"
                method="POST">
                <label>
                    Your email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Your message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
