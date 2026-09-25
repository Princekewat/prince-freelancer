const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Git",
  "REST API"
];

export default function Skills() {
  return (
    <section className="section skills-section">

      <div className="section-heading">
        <p>MY TOOLKIT</p>

        <h2>
          Technologies I worked with and tools I use to build modern web applications.
        </h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}