// function Skills() {
//   return (
//     <section>
//       <h1>My Skills</h1>
//       <p>HTML | CSS | JavaScript | React | Node.js | MongoDB</p>
//     </section>
//   );
// }

// export default Skills;

function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Git & GitHub',
    'Postman'
  ];

  return (
    <section className="section skills-section">
      <p className="section-label">WHAT I WORK WITH</p>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;