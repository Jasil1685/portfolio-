// function Contact() {
//   return (
//     <section>
//       <h1>Contact Me</h1>
//       <p>Email: Add your email address here</p>
//     </section>
//   );
// }

// export default Contact;

import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="section contact-section">
      <p className="section-label">LET'S CONNECT</p>
      <h2 className="section-title">Contact Me</h2>

      <p>
        I'm open to fullstack developer internships
        and fresher opportunities.
      </p>

      <a href="mailto:mohammedjasilmk909@gmail.com" className="btn">
        Send Me an Email
      </a>

      <div className="contact-links">
        <a href="https://linkedin.com/in/jasil-mk" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="https://github.com/jasil1685" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;