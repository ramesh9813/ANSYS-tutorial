import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <>
      <section id="tutorials">
        <h2>ANSYS Tutorial Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Structural Analysis</h3>
            <ul>
              <li><Link to="/tutorial/home">Static Structural Analysis</Link></li>
              <li><Link to="/tutorial/home">Modal Analysis</Link></li>
              <li><Link to="/tutorial/home">Thermal Stress Analysis</Link></li>
              <li><Link to="/tutorial/home">Nonlinear Analysis</Link></li>
            </ul>
            <Link to="/tutorial/home" className="btn">Browse Tutorials</Link>
          </div>
          <div className="category-card">
            <h3>Fluid Dynamics (CFD)</h3>
            <ul>
              <li><Link to="/tutorial/home">Internal Flow Analysis</Link></li>
              <li><Link to="/tutorial/home">External Aerodynamics</Link></li>
              <li><Link to="/tutorial/home">Heat Transfer in Fluids</Link></li>
              <li><Link to="/tutorial/home">Multiphase Flow</Link></li>
            </ul>
            <Link to="/tutorial/home" className="btn">Browse Tutorials</Link>
          </div>
          <div className="category-card">
            <h3>Electromagnetics</h3>
            <ul>
              <li><Link to="/tutorial/home">Electrostatic Analysis</Link></li>
              <li><Link to="/tutorial/home">Magnetostatic Analysis</Link></li>
              <li><Link to="/tutorial/home">Electromagnetic Heating</Link></li>
              <li><Link to="/tutorial/home">Antenna Design</Link></li>
            </ul>
            <Link to="/tutorial/home" className="btn">Browse Tutorials</Link>
          </div>
        </div>
      </section>

      <section id="examples">
        <h2>Featured Examples</h2>
        <div className="example-grid">
          <div className="example-card">
            <h3>Beam Bending Analysis</h3>
            <p>Learn how to analyze stress and deflection in a cantilever beam</p>
            <div className="difficulty">Beginner</div>
            <Link to="/tutorial/home" className="btn">View Example</Link>
          </div>
          <div className="example-card">
            <h3>Heat Exchanger CFD</h3>
            <p>Simulate heat transfer in a shell-and-tube heat exchanger</p>
            <div className="difficulty">Intermediate</div>
            <Link to="/tutorial/home" className="btn">View Example</Link>
          </div>
          <div className="example-card">
            <h3>Electromagnetic Brake</h3>
            <p>Analyze electromagnetic forces in an eddy current brake system</p>
            <div className="difficulty">Advanced</div>
            <Link to="/tutorial/home" className="btn">View Example</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutorial;
