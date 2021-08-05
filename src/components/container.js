import React, { useState } from 'react';

import Nav from './components/nav'
import AboutMe from './components/pages/aboutMe'
import Projects from './components/pages/projects'
import Contact from './components/pages/contact'
import Home from './components/pages/home'


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }