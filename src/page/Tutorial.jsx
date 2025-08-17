import React from 'react';
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
              <li><a href="structural-analysis.html">Static Structural Analysis</a></li>
              <li>Modal Analysis</li>
              <li>Thermal Stress Analysis</li>
              <li>Nonlinear Analysis</li>
            </ul>
            <a href="structural-analysis.html" className="btn">Browse Tutorials</a>
          </div>
          <div className="category-card">
            <h3>Fluid Dynamics (CFD)</h3>
            <ul>
              <li><a href="cfd-analysis.html">Internal Flow Analysis</a></li>
              <li>External Aerodynamics</li>
              <li>Heat Transfer in Fluids</li>
              <li>Multiphase Flow</li>
            </ul>
            <a href="cfd-analysis.html" className="btn">Browse Tutorials</a>
          </div>
          <div className="category-card">
            <h3>Electromagnetics</h3>
            <ul>
              <li><a href="electromagnetics-analysis.html">Electrostatic Analysis</a></li>
              <li>Magnetostatic Analysis</li>
              <li>Electromagnetic Heating</li>
              <li>Antenna Design</li>
            </ul>
            <a href="electromagnetics-analysis.html" className="btn">Browse Tutorials</a>
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
            <a href="structural-analysis.html" className="btn">View Example</a>
          </div>
          <div className="example-card">
            <h3>Heat Exchanger CFD</h3>
            <p>Simulate heat transfer in a shell-and-tube heat exchanger</p>
            <div className="difficulty">Intermediate</div>
            <a href="cfd-analysis.html" className="btn">View Example</a>
          </div>
          <div className="example-card">
            <h3>Electromagnetic Brake</h3>
            <p>Analyze electromagnetic forces in an eddy current brake system</p>
            <div className="difficulty">Advanced</div>
            <a href="electromagnetics-analysis.html" className="btn">View Example</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutorial;
