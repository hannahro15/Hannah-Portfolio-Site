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
                    Your name:
                    <input id="name" type="text" name="name" required />
                </label>
                <label>
                    Your email:
                    <input id="email" type="email" name="email" required />
                </label>
                <label>
                    Your message:
                    <textarea id="message" name="message" required></textarea>
                </label>
                <button id="submit" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
