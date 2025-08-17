import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="hero">
        <h1>Master ANSYS FEA &amp; CFD</h1>
        <p>Comprehensive tutorials for structural analysis, fluid dynamics, and multiphysics simulation</p>
        <button>Start Learning</button>
      </section>

      <section id="getting-started">
        <h2>Getting Started with ANSYS</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <h3>Installation Guide</h3>
            <p>Step-by-step guide to install ANSYS Workbench and configure your system</p>
            <a href="#installation" className="btn">View Guide</a>
          </div>
          <div className="tutorial-card">
            <h3>Interface Overview</h3>
            <p>Learn the ANSYS Workbench interface and basic navigation</p>
            <a href="#interface" className="btn">Learn More</a>
          </div>
          <div className="tutorial-card">
            <h3>First Simulation</h3>
            <p>Create your first structural analysis simulation from scratch</p>
            <a href="#first-simulation" className="btn">Start Tutorial</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
