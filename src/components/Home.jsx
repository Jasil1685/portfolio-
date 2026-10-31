// function Home() {
//   return (
//     <section>
//       <h1>Hi, I'm Mohammed Jasil</h1>
//       <h2>Frontend Developer</h2>
//       <p>Welcome to my portfolio.</p>
//     </section>
//   );
// }

// export default Home;

import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro">HELLO, I'M</p>

        <h1>MOHAMMED <span>JASIL</span></h1>

        <h2>Full Stack Developer</h2>

        <p className='main-p'>
          Hi, I'm a passionate Full Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I work with the MERN stack, including React.js, Node.js, Express.js, and MongoDB, along with HTML, CSS, and JavaScript. I enjoy turning ideas into functional web experiences and continuously improving my development skills.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div>

        <div className="social-links">
          <a href="https://github.com/jasil1685" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/in/jasil-mk" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          
        </div>
      </div>
      <div className='hero-image'>
        <img src="PASSPORT-SIZE-PHOTO.png" alt="photo" />
      </div>
    </section>
    
  );
}

export default Home;