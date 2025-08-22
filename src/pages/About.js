import Navbar from '../components/Navbar';

function About() {
    return (
        <div className="about">
            <Navbar />
            <h1>About Me</h1>
            <p>I am mainly a self-taught developer originally coming from a musical background. I have gone through various online courses and bootcamps to enhance my skills.
                My non-technical experience is in music teaching, retail, customer service, libraries and administration.
            </p>
            <h2>Technical Skills</h2>
            <p>I am proficient in HTML, CSS, JavaScript, SQL, and Python. I am currently learning React. I have experience in frameworks such as Bootstrap CSS, Tailwind CSS, and Materialize CSS too. I also have experience with Git, GitHub, and Agile methodologies and databases like MongoDB.
                I also have data analysis skills using Pandas, Numpy, Matplotlib, and Seaborn.</p>
            <h2>Hobbies & Interests</h2>
            <p>In my free time, I enjoy working on personal coding projects, playing in amateur orchestras, cooking, baking, and doing jigsaw puzzles.
            </p>
        </div>
    );
}

export default About;
