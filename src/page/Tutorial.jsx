import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className="tutorial-intro">
      <h1>Welcome to the ANSYS Tutorials</h1>
      <p>Select a category from the left sidebar to get started.</p>
      <p>Our tutorials cover a wide range of topics in structural analysis, fluid dynamics, and electromagnetics. Whether you are a beginner or an experienced user, you will find valuable resources to enhance your skills.</p>
      <div className="featured-tutorials">
        <h2>Featured Tutorials</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/structural">Static Structural Analysis</Link></h3>
            <p>Learn the fundamentals of static structural analysis in ANSYS.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/cfd">Internal Flow Analysis</Link></h3>
            <p>Simulate fluid flow inside a pipe and analyze the results.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/electromagnetics">Electrostatic Analysis</Link></h3>
            <p>Understand how to perform electrostatic analysis on a capacitor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;