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
        <ol>
          <li>Launch ANSYS Workbench</li>
          <li>Create a new analysis system (e.g., Static Structural)</li>
          <li>Identify input parameters (e.g., geometry dimensions, material properties, load magnitudes) and output parameters (e.g., stress, deformation)</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-2">Define Parameters</h3>
        <p>Identify and define input and output parameters in your simulation.</p>
        <div className="step-image">[Screenshot: Parameters in ANSYS Workbench]</div>
        <ol>
          <li>In DesignModeler or Mechanical, define input parameters by right-clicking on dimensions or properties and selecting "P" (Parameter)</li>
          <li>In Mechanical, define output parameters by right-clicking on results (e.g., Total Deformation, Equivalent Stress) and selecting "P"</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-3">Set up Design of Experiments (DOE)</h3>
        <p>Choose a DOE method to explore the design space efficiently.</p>
        <div className="step-image">[Screenshot: DOE setup in ANSYS Workbench]</div>
        <ol>
          <li>In the Project Schematic, right-click on "Parameters" and select "Edit"</li>
          <li>In the Parameters tab, select "Add Design of Experiments"</li>
          <li>Choose a DOE type (e.g., Central Composite Design, Full Factorial) and define the range for each input parameter</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-4">Run Parametric Study</h3>
        <p>Execute the parametric study to generate results for different parameter combinations.</p>
        <div className="step-image">[Screenshot: Parametric study execution]</div>
        <ol>
          <li>In the Parameters tab, click "Update All Design Points"</li>
          <li>ANSYS will automatically run simulations for each design point defined in the DOE</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-5">Analyze Results</h3>
        <p>Review the results to understand the relationship between input parameters and output responses.</p>
        <div className="step-image">[Screenshot: Response surface plot]</div>
        <ol>
          <li>In the Parameters tab, review the table of design points and their corresponding output parameters</li>
          <li>Use tools like Response Surface, Sensitivity, and Optimization to analyze the data</li>
          <li>Generate charts and plots to visualize the relationships</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should be able to identify optimal design parameters, understand the sensitivity of output responses to input changes, and gain insights into the design space.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Now that you've completed your first parametric analysis, try:</p>
        <ul>
          <li>Performing an optimization study to find the best design</li>
          <li>Integrating with external optimization tools</li>
          <li>Exploring different DOE methods</li>
          <li>Using custom scripts for advanced parameterization</li>
        </ul>
        <Link to="/tutorial" className="btn">Back to Parametric Tutorials</Link>
      </div>
    </div>
  );
};

export default Parametric;