import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <div className="main-container">
      {/* Home Section */}
      <section id="home" className="intro-section">
        <h1>Welcome to the CSBS Department Magazine Committee</h1>
        <p>
          This is the official magazine platform of the Department of Computer Science and Business Systems (CSBS).
          It serves as a centralized space where students and faculty can upload technical articles, event highlights,
          creative writing, and visual content that reflect the department’s excellence and vibrant spirit.
          All submissions will be reviewed and curated for publication in the official CSBS magazine.
        </p>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-us-section">
        <h2>About Us</h2>
        <p>
          The CSBS Department Magazine Committee is dedicated to offering a platform where students and faculty
          showcase their technical, creative, and expressive work. Our goal is to highlight the achievements and
          innovations of our department while encouraging community involvement through a professionally curated magazine.
        </p>
        <p>
          We publish a wide range of content—from technical articles and event reports to poetry, photography, and more.
          Every submission is reviewed to ensure quality and presentation.
        </p>
      </section>


      {/* Placeholder Sections */}
      <div id="upload-article" className="placeholder-section">
        <h3>Upload Article</h3>
        <p>Coming soon: Form to submit written content.</p>
      </div>
      <div id="upload-photo" className="placeholder-section">
        <h3>Upload Photo</h3>
        <p>Coming soon: Upload photos from departmental events.</p>
      </div>
      <div id="suggestions" className="placeholder-section">
        <h3>Suggestions</h3>
        <p>Coming soon: Share your ideas to improve the magazine.</p>
      </div>

      {/* Contact Us Section */}
      <section id="contact-us" className="about-us-section">
        <h2>Contact Us</h2>
        <p>Email: csbs.magazine@gmail.com</p>
      </section>
    </div>
  );
};

export default MainSection;
