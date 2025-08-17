import React from 'react';
import { Link } from 'react-router-dom';
import './Fatigue.css';

const Fatigue = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Fatigue Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Fatigue Analysis in ANSYS Workbench to predict the life of components subjected to cyclic loading.</p>

      <div className="step">
        <h3 id="step-1">Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Static Structural analysis system, followed by a Fatigue Tool.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Fatigue Tool]</div>
      </div>

      <div className="step">
        <h3 id="step-2">Define Material Properties</h3>
        <p>Set up the material properties for your analysis, including fatigue properties (S-N curves).</p>
        <div className="step-image">[Screenshot: Engineering Data interface with fatigue properties]</div>
      </div>

      <div className="step">
        <h3 id="step-3">Import or Create Geometry</h3>
        <p>Create or import the geometry for your fatigue analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with geometry]</div>
      </div>

      <div className="step">
        <h3 id="step-4">Generate Mesh</h3>
        <p>Create a fine mesh in critical regions for accurate fatigue results.</p>
        <div className="step-image">[Screenshot: Meshed model]</div>
      </div>

      <div className="step">
        <h3 id="step-5">Apply Boundary Conditions</h3>
        <p>Define cyclic loads and supports for your fatigue analysis.</p>
        <div className="step-image">[Screenshot: Model with cyclic load]</div>
      </div>

      <div className="step">
        <h3 id="step-6">Solve and Review Results</h3>
        <p>Run the fatigue analysis and examine the life, damage, and safety factor results.</p>
        <div className="step-image">[Screenshot: Fatigue life contour plot]</div>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should expect to see areas of low fatigue life where stress concentrations are high.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Explore further fatigue analysis topics.</p>
      </div>
    </div>
  );
};

export default Fatigue;
