// // import { Link } from "react-router-dom";
// // function Navbar() {
// //   return (
// //     <nav>
// //       <h2>Jasil</h2>

// //       <ul>
// //         <li><link to="/">Home</link></li>
// //         <li><link to="/about">About</link></li>
// //         <li><link to="/skills">Skills</link></li>
// //         <li><link to="/projects">Projects</link></li>
// //         <li><link to="/contact">Contact</link></li>

// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <h2>Jasil.</h2>

//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/skills">Skills</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav className="navbar">
        {/* <Link to="/" className="logo" onClick={closeMenu}>
          MOHAMMED JASIL<span></span>
        </Link> */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

          {/* <li><Link to="/footer" onClick={closeMenu}>Footer</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;