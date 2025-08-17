import React from 'react';
import { Link } from 'react-router-dom';
import './Model.css';

const Model = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Model Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Model Analysis in ANSYS Workbench to determine the natural frequencies and mode shapes of a structure.</p>

      <div className="step">
        <h3 id="step-1">Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Modal analysis system.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Modal system]</div>
      </div>

      <div className="step">
        <h3 id="step-2">Define Material Properties</h3>
        <p>Set up the material properties for your analysis, including density.</p>
        <div className="step-image">[Screenshot: Engineering Data interface with material properties]</div>
      </div>

      <div className="step">
        <h3 id="step-3">Import or Create Geometry</h3>
        <p>Create or import the geometry for your modal analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with geometry]</div>
      </div>

      <div className="step">
        <h3 id="step-4">Generate Mesh</h3>
        <p>Create a finite element mesh for accurate modal results.</p>
        <div className="step-image">[Screenshot: Meshed model]</div>
      </div>

      <div className="step">
        <h3 id="step-5">Apply Boundary Conditions</h3>
        <p>Define supports for your modal analysis.</p>
        <div className="step-image">[Screenshot: Model with fixed support]</div>
      </div>

      <div className="step">
        <h3 id="step-6">Solve and Review Results</h3>
        <p>Run the modal analysis and examine the natural frequencies and mode shapes.</p>
        <div className="step-image">[Screenshot: Mode shape visualization]</div>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should expect a series of natural frequencies and corresponding mode shapes.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Explore further modal analysis topics.</p>
      </div>
    </div>
  );
};

export default Model;
