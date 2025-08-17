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
        <ol>
          <li>Launch ANSYS Workbench</li>
          <li>Drag "Transient Structural" or "Transient Thermal" to the Project Schematic</li>
          <li>Right-click on "Engineering Data" and select "Edit"</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-2">Define Material Properties</h3>
        <p>Set up the material properties for your analysis, considering time-dependent properties if applicable.</p>
        <div className="step-image">[Screenshot: Engineering Data interface with material properties]</div>
        <div className="code-block">
          Material: Steel<br />
          Density: 7850 kg/m³<br />
          Young's Modulus: 2.0E+11 Pa<br />
          Poisson's Ratio: 0.3
        </div>
      </div>

      <div className="step">
        <h3 id="step-3">Import or Create Geometry</h3>
        <p>Create or import the geometry for your transient analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with geometry]</div>
        <ol>
          <li>Create or import the component geometry</li>
          <li>Save and close DesignModeler</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-4">Generate Mesh</h3>
        <p>Create a finite element mesh for accurate transient results.</p>
        <div className="step-image">[Screenshot: Meshed model]</div>
        <ol>
          <li>Right-click on "Model" and select "Edit"</li>
          <li>In Mechanical, generate mesh</li>
          <li>Ensure mesh quality is suitable for transient analysis</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-5">Apply Boundary Conditions</h3>
        <p>Define time-dependent loads and supports for your transient analysis.</p>
        <div className="step-image">[Screenshot: Model with time-dependent load]</div>
        <ol>
          <li>Apply fixed supports and time-dependent loads (e.g., force, pressure, temperature)</li>
          <li>Define the time steps and end time for the analysis</li>
          <li>Set up initial conditions if necessary</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-6">Solve and Review Results</h3>
        <p>Run the transient analysis and examine the results over time.</p>
        <div className="step-image">[Screenshot: Time-dependent result plot]</div>
        <ol>
          <li>Click "Solve" to run the analysis</li>
          <li>Review results at different time steps (e.g., total deformation, stress, temperature)</li>
          <li>Create animations to visualize the time-dependent behavior</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>You should observe how the system's response changes with time, including dynamic effects, heat propagation, or time-varying stresses.</p>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Now that you've completed your first transient analysis, try:</p>
        <ul>
          <li>Applying different time-dependent load profiles</li>
          <li>Analyzing impact or shock events</li>
          <li>Exploring transient heat transfer with phase change</li>
          <li>Coupling transient structural with transient thermal analysis</li>
        </ul>
        <Link to="/tutorial" className="btn">Back to Transient Tutorials</Link>
      </div>
    </div>
  );
};

export default Transient;