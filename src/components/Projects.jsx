// function Projects() {
//   return (
//     <section>
//       <h1>My Projects</h1>
//       <h3>PetKart – Pet Food E-commerce</h3>
//       <p>Built using React, JavaScript and CSS.</p>
//     </section>
//   );
// }

// export default Projects;

function Projects() {
  return (
    <section className="section">
      <p className="section-label">MY RECENT WORK</p>
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-icon">🐾</div>

          <h3>Pet Food E-Commerce Website</h3>

          <p>
            Developed a responsive pet food shopping interface
            with product pages, protected routes, separate admin
            login and cart management.
          </p>

          <div className="tech-list">
            <span>React</span>
            <span>React Router</span>
            <span>CSS</span>
            <span>Context API</span>
          </div>

          <a
            href="https://github.com/jasil1685"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;