import React from 'react';
import { Link } from 'react-router-dom';
import './Parametric.css';

const Parametric = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Parametric Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Parametric Analysis in ANSYS Workbench to study the effect of design variables on simulation results.</p>

      <div className="step">
        <h3 id="step-1">Create New Project</h3>
        <p>Open ANSYS Workbench and set up a simulation with design parameters.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with parameters]</div>
      </div>

      <div className="step">
        <h3 id="step-2">Define Parameters</h3>
        <p>Identify and define input and output parameters in your simulation.</p>
        <div className="step-image">[Screenshot: Parameters in ANSYS Workbench]</div>
      </div>

      <div className="step">
        <h3 id="step-3">Set up Design of Experiments (DOE)</h3>
        <p>Choose a DOE method to explore the design space efficiently.</p>
        <div className="step-image">[Screenshot: DOE setup in ANSYS Workbench]</div>
      </div>

      <div className="step">
        <h3 id="step-4">Run Parametric Study</h3>
        <p>Execute the parametric study to generate results for different parameter combinations.</p>
        <div className="step-image">[Screenshot: Parametric study execution]</div>
      </div>

      <div className="step">
        <h3 id="step-5">Analyze Results</h3>
        <p>Review the results to understand the relationship between input parameters and output responses.</p>
        <div className="step-image">[Screenshot: Response surface plot]</div>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should be able to identify optimal design parameters or understand sensitivities.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Explore further parametric analysis topics.</p>
      </div>
    </div>
  );
};

export default Parametric;
