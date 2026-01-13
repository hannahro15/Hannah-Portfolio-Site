import '../pages/About.css'

function About() {
    return (
        <main className="about">
            <h1>About Me</h1>
            <p>I am mainly a self-taught developer originally coming from a musical background. I have gone through various online courses and bootcamps to enhance my skills.
                My non-technical experience is in music teaching, retail, customer service, libraries and administration.
            </p>
            <hr></hr>
            <h2>Technical Skills</h2>
            <ul>
                <li><strong>Frontend: </strong>HTML, CSS, JavaScript, React, Bootstrap, Tailwind, Materialize</li>
                <li><strong>Backend & Databases: </strong>Python, Django, Flask, SQL, MongoDB</li>
                <li><strong>Data & Analysis: </strong>Pandas, Numpy, Matplotlib, Seaborn</li>
                <li><strong>Tools & Methodologies: </strong>Git, GitHub, Heroku, AWS S3, AWS EC2, Agile, Scrum, Docker</li>
            </ul>
            <hr></hr>
            <h2>Hobbies & Interests</h2>
            <p>In my free time, I enjoy working on personal coding projects, playing in amateur orchestras, cooking, baking, and doing jigsaw puzzles. I also like gardening, and occasionally going to theme parks and escape rooms.
            </p>
        </main>
    );
}

export default About;
