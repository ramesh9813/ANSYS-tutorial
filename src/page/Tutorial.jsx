import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className="tutorial-intro">
      <h1>Welcome to the ANSYS Tutorials</h1>
      <p>Select a category from the left sidebar to get started.</p>
      <p>Our tutorials cover a wide range of topics in structural analysis, fluid dynamics, and multiphysics simulation. Whether you are a beginner or an experienced user, you will find valuable resources to enhance your skills.</p>
      <div className="featured-tutorials">
        <h2>Featured Tutorials</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/structural">Structural Analysis</Link></h3>
            <p>Learn the fundamentals of static structural analysis in ANSYS.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/cfd">Fluid Dynamics (CFD)</Link></h3>
            <p>Simulate fluid flow inside a pipe and analyze the results.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/thermal">Thermal Analysis</Link></h3>
            <p>Analyze heat transfer and temperature distribution.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/model">Model Analysis</Link></h3>
            <p>Determine natural frequencies and mode shapes.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/thermo-structural">Thermo-Structural Analysis</Link></h3>
            <p>Analyze thermal effects on structural components.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/coupled">Coupled Analysis</Link></h3>
            <p>Simulate interacting physics phenomena.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/fatigue">Fatigue Analysis</Link></h3>
            <p>Predict component life under cyclic loading.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/transient">Transient Analysis</Link></h3>
            <p>Simulate time-dependent phenomena.</p>
          </div>
          <div className="tutorial-card">
            <h3><Link to="/tutorial/home/parametric">Parametric Analysis</Link></h3>
            <p>Study the effect of design variables on results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
