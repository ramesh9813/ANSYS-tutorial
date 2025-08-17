import React from 'react';
import { Link } from 'react-router-dom';
import './Transient.css';

const Transient = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Transient Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Transient Analysis in ANSYS Workbench to simulate time-dependent phenomena.</p>

      <div className="step">
        <h3 id="step-1">Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Transient Structural or Transient Thermal analysis system.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Transient system]</div>
      </div>

      <div className="step">
        <h3 id="step-2">Define Material Properties</h3>
        <p>Set up the material properties for your analysis, considering time-dependent properties if applicable.</p>
        <div className="step-image">[Screenshot: Engineering Data interface with material properties]</div>
      </div>

      <div className="step">
        <h3 id="step-3">Import or Create Geometry</h3>
        <p>Create or import the geometry for your transient analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with geometry]</div>
      </div>

      <div className="step">
        <h3 id="step-4">Generate Mesh</h3>
        <p>Create a finite element mesh for accurate transient results.</p>
        <div className="step-image">[Screenshot: Meshed model]</div>
      </div>

      <div className="step">
        <h3 id="step-5">Apply Boundary Conditions</h3>
        <p>Define time-dependent loads and supports for your transient analysis.</p>
        <div className="step-image">[Screenshot: Model with time-dependent load]</div>
      </div>

      <div className="step">
        <h3 id="step-6">Solve and Review Results</h3>
        <p>Run the transient analysis and examine the results over time.</p>
        <div className="step-image">[Screenshot: Time-dependent result plot]</div>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should observe how the system's response changes with time.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Explore further transient analysis topics.</p>
      </div>
    </div>
  );
};

export default Transient;
