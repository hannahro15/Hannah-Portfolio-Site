import './About.css'

function About() {
    return (
        <main className="about">
            <h1 id="about-title">About Me</h1>
            <p>
                I am mainly a self-taught developer originally coming from a musical background. I have completed various online coding courses, bootcamps, and certifications over the last few years to enhance my skills. I completed a Level 5 Web Development Diploma with the Code Institute between Jan 2024 and Dec 2024, and was awarded a pass in Jan 2025.
                My non-technical experience is in music teaching, retail, customer service, libraries, and administration.
            </p>
            <p>
                I thrive in Agile teams and love contributing to all stages of the development lifecycle. I am especially drawn to visual and interactive projects, and my strong spatial skills which I have gained through my love of jigsaw puzzles, which help me see patterns and solve problems creatively. My training as a musician has given me excellent attention to detail, which I bring to my development work. I have participated in six Code Institute hackathons (four as a student and two as an alumni), serving as Scrum Master in four of them, which has further strengthened my teamwork and leadership abilities.
            </p>
            <hr></hr>
            <h2>Technical Skills</h2>
            <ul>
                <li><strong>Core Languages & Backend Frameworks:</strong> Python, SQL, JavaScript, Django, Flask</li>
                <li><strong>Front-End:</strong> HTML, CSS, React, Bootstrap, TailwindCSS, jQuery, TypeScript</li>
                <li><strong>Databases & Cloud:</strong> PostgreSQL, MongoDB, AWS (S3, EC2)</li>
                <li><strong>Tools & Testing:</strong> Git, GitHub, Docker, VS Code, Jest, Vitest</li>
                <li><strong>Methodologies & Practices:</strong> Agile, Scrum, UX/UI Design, Wireframing (Balsamiq, Figma)</li>
                <li><strong>AI & Productivity:</strong> GitHub Copilot, ChatGPT, Claude</li>
            </ul>
            <hr></hr>
            <h2>Hobbies & Interests</h2>
            <p>In my free time, I enjoy working on personal coding projects, playing in amateur orchestras, cooking, baking, and doing jigsaw puzzles. I also like gardening, and occasionally going to theme parks and escape rooms.
            </p>
            <p>Feel free to reach out if you'd like to connect or collaborate!</p>
        </main>
    );
}

export default About;
