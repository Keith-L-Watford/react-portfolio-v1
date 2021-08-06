import React from "react";
import "../styles/nav.css";
// import Container from "./container"

export default function Nav({ currentPage, handlePageChange }) {
  return (


<nav className="navbar" role="navigation" aria-label="main navigation">
  {/* <div className="navbar-brand">
    
  </div> */}

  <div id="navbarBasicExample" className="navbar-menu center">
    <div className="navbar-start">
      <a 
      href="#Home"
      className={currentPage === 'Home' ? 'navbar-item active' : 'navbar-item'}
      onClick={() => handlePageChange('Home')}>
        Home
      </a>

      <a 
      href="#AboutMe"
      className={currentPage === 'AboutMe' ? 'navbar-item active' : 'navbar-item'}
      onClick={() => handlePageChange('AboutMe')}>
       About Me
      </a>

      <a 
      href="#Projects"
      className={currentPage === 'Projects' ? 'navbar-item active' : 'navbar-item'}
      onClick={() => handlePageChange('Projects')}>
       Projects
      </a>

      <a 
        href="#Contact"
        className={currentPage === 'Contact' ? 'navbar-item active' : 'navbar-item'}
        onClick={() => handlePageChange('Contact')}>
       Contact
      </a>

    </div>
  </div>
</nav>
  );
}
