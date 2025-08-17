import React from 'react';
import { Link } from 'react-router-dom';
import './ThermoStructural.css';

const ThermoStructural = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Thermo-Structural Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Thermo-Structural Analysis in ANSYS Workbench to analyze the effects of temperature changes on structural components.</p>

      <div className="step">
        <h3 id="step-1">Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Thermo-Structural analysis system.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Thermo-Structural system]</div>
      </div>

      <div className="step">
        <h3 id="step-2">Define Material Properties</h3>
        <p>Set up the material properties for your analysis, including thermal and structural properties.</p>
        <div className="step-image">[Screenshot: Engineering Data interface with material properties]</div>
      </div>

      <div className="step">
        <h3 id="step-3">Import or Create Geometry</h3>
        <p>Create or import the geometry for your thermo-structural analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with geometry]</div>
      </div>

      <div className="step">
        <h3 id="step-4">Generate Mesh</h3>
        <p>Create a finite element mesh for accurate thermo-structural results.</p>
        <div className="step-image">[Screenshot: Meshed model]</div>
      </div>

      <div className="step">
        <h3 id="step-5">Apply Boundary Conditions</h3>
        <p>Define thermal and structural loads and constraints.</p>
        <div className="step-image">[Screenshot: Model with thermal and structural loads]</div>
      </div>

      <div className="step">
        <h3 id="step-6">Solve and Review Results</h3>
        <p>Run the thermo-structural analysis and examine the temperature distribution and structural deformation.</p>
        <div className="step-image">[Screenshot: Temperature and stress contour plots]</div>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should expect to see how temperature changes induce stresses and deformations.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Explore further thermo-structural analysis topics.</p>
      </div>
    </div>
  );
};

export default ThermoStructural;
