import React from 'react';
import { Link } from 'react-router-dom';
import './Coupled.css';

const Coupled = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Coupled Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Coupled Analysis in ANSYS Workbench to simulate phenomena where different physics interact with each other (e.g., fluid-structure interaction, thermal-electric coupling).</p>

      <div className="step">
        <h3 id="step-1">Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Coupled analysis system (e.g., Fluid-Structure Interaction).</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Coupled system]</div>
      </div>

      <div className="step">
        <h3 id="step-2">Define Material Properties</h3>
        <p>Set up the material properties for all interacting physics.</p>
        <div className="step-image">[Screenshot: Engineering Data interface with multiple material properties]</div>
      </div>

      <div className="step">
        <h3 id="step-3">Import or Create Geometry</h3>
        <p>Create or import the geometry for your coupled analysis, ensuring interfaces are well-defined.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with coupled geometry]</div>
      </div>

      <div className="step">
        <h3 id="step-4">Generate Mesh</h3>
        <p>Create a compatible mesh for all interacting domains.</p>
        <div className="step-image">[Screenshot: Meshed coupled model]</div>
      </div>

      <div className="step">
        <h3 id="step-5">Apply Boundary Conditions</h3>
        <p>Define loads and boundary conditions for all interacting physics, including coupling conditions.</p>
        <div className="step-image">[Screenshot: Coupled model with boundary conditions]</div>
      </div>

      <div className="step">
        <h3 id="step-6">Solve and Review Results</h3>
        <p>Run the coupled analysis and examine the results from all interacting physics.</p>
        <div className="step-image">[Screenshot: Coupled analysis results]</div>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should observe the interaction between different physical phenomena.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Explore further coupled analysis topics.</p>
      </div>
    </div>
  );
};

export default Coupled;
