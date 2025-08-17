import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="hero">
        <h1>Master ANSYS FEA &amp; CFD</h1>
        <p>Comprehensive tutorials for structural analysis, fluid dynamics, and multiphysics simulation</p>
        <Link to="/tutorial" className="btn">Start Learning</Link>
      </section>

      <section id="about-us">
        <h2>About ANSYS Tutorial Hub</h2>
        <p>Welcome to the ultimate resource for mastering ANSYS simulation software. Our platform provides in-depth, step-by-step tutorials covering a wide range of engineering disciplines, from fundamental concepts to advanced applications. Whether you're a student, researcher, or professional engineer, our goal is to empower you with the knowledge and skills to confidently tackle complex simulation challenges.</p>
        <p>We believe in learning by doing. That's why our tutorials are designed to be practical, with clear explanations, visual aids, and downloadable project files to help you follow along and apply what you learn.</p>
      </section>

      <section id="getting-started">
        <h2>Getting Started with ANSYS</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <h3>Installation Guide</h3>
            <p>Step-by-step guide to install ANSYS Workbench and configure your system</p>
            <Link to="/tutorial" className="btn">View Guide</Link>
          </div>
          <div className="tutorial-card">
            <h3>Interface Overview</h3>
            <p>Learn the ANSYS Workbench interface and basic navigation</p>
            <Link to="/tutorial" className="btn">Learn More</Link>
          </div>
          <div className="tutorial-card">
            <h3>First Simulation</h3>
            <p>Create your first structural analysis simulation from scratch</p>
            <Link to="/tutorial" className="btn">Start Tutorial</Link>
          </div>
        </div>
      </section>

      <section id="why-choose-us">
        <h2>Why Choose Our Tutorials?</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <h3>Comprehensive Content</h3>
            <p>Covering Structural, CFD, Thermal, Coupled, and more.</p>
          </div>
          <div className="tutorial-card">
            <h3>Practical Examples</h3>
            <p>Real-world case studies and hands-on exercises.</p>
          </div>
          <div className="tutorial-card">
            <h3>Expert-Curated</h3>
            <p>Content developed by experienced ANSYS users and engineers.</p>
          </div>
          <div className="tutorial-card">
            <h3>Always Up-to-Date</h3>
            <p>Regularly updated with the latest ANSYS versions and features.</p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h2>What Our Users Say</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <p>"These tutorials are a lifesaver! Clear, concise, and incredibly helpful for my university projects."</p>
            <h4>- Jane Doe, Engineering Student</h4>
          </div>
          <div className="tutorial-card">
            <p>"Finally, a resource that explains complex ANSYS concepts in an easy-to-understand way. Highly recommended!"</p>
            <h4>- John Smith, R&D Engineer</h4>
          </div>
          <div className="tutorial-card">
            <p>"The practical examples helped me apply ANSYS to my work immediately. A must-have for any simulation enthusiast."</p>
            <h4>- Emily White, Design Engineer</h4>
          </div>
        </div>
      </section>

      <section id="call-to-action">
        <h2>Ready to Master ANSYS?</h2>
        <p>Join thousands of learners who are accelerating their engineering careers with our comprehensive ANSYS tutorials.</p>
        <Link to="/tutorial" className="btn">Explore All Tutorials</Link>
      </section>
    </>
  );
};

export default Home;