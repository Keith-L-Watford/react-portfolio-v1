import React, { useState } from "react";

import Nav from "./nav";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Footer from "./pages/footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>
      {renderPage()}
      </div>
      <br />
      <Footer />
    </>
  );
}
