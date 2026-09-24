const projects = [
  {
    title: "Freelancer Platform",
    category: "Next.js",
    description:
      "A modern platform where clients can discover freelancers and book projects.",
    tech: ["Next.js", "TypeScript", "MongoDB"]
  },
  {
    title: "Business Dashboard",
    category: "Full Stack",
    description:
      "Responsive dashboard for managing customers, projects and business data.",
    tech: ["React", "Node.js", "SQL"]
  },
  {
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "Modern shopping experience with products, cart and checkout architecture.",
    tech: ["Next.js", "API", "Database"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <p>PORTFOLIO</p>

        <h2>
          Selected projects
        </h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={project.title}>

            <div className="project-number">
              0{index + 1}
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="tech-list">

              {project.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}