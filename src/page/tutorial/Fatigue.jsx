import React from 'react';
import { Link } from 'react-router-dom';
import './Fatigue.css';

const Fatigue = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Fatigue Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Fatigue Analysis in ANSYS Workbench to predict the life of components subjected to cyclic loading.</p>

      <div className="tutorial-page-grid">
        <div className="tutorial-card">
          <h2>Model Creation</h2>
          <div className="step">
            <h3 id="step-1">Create New Project</h3>
            <p>Open ANSYS Workbench and create a new Static Structural analysis system, followed by a Fatigue Tool.</p>
            <img src="https://picsum.photos/seed/fatigue/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Launch ANSYS Workbench</li>
              <li>Drag "Static Structural" to the Project Schematic</li>
              <li>Drag "Fatigue Tool" from the Component Systems to the Project Schematic and connect it to the Solution of the Static Structural system</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="step-2">Define Material Properties</h3>
            <p>Set up the material properties for your analysis, including fatigue properties (S-N curves).</p>
            <img src="https://picsum.photos/seed/fatigue/600/300" alt="Simulation step image" className="step-image" />
            <div className="code-block">
              Material: Steel (with S-N curve data)<br />
              Tensile Strength: 400 MPa<br />
              Yield Strength: 250 MPa
            </div>
          </div>
          <div className="step">
            <h3 id="step-3">Import or Create Geometry</h3>
            <p>Create or import the geometry for your fatigue analysis.</p>
            <img src="https://picsum.photos/seed/fatigue/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Create or import the component geometry (e.g., a bracket with a hole)</li>
              <li>Ensure the geometry is clean and suitable for meshing</li>
              <li>Save and close DesignModeler</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Meshing</h2>
          <div className="step">
            <h3 id="step-4">Generate Mesh</h3>
            <p>Create a fine mesh in critical regions for accurate fatigue results.</p>
            <img src="https://picsum.photos/seed/fatigue/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Model" in Static Structural and select "Edit"</li>
              <li>Generate mesh, focusing on refining mesh in areas of high stress concentration (e.g., around holes)</li>
              <li>Ensure mesh quality is good</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Boundary Conditions</h2>
          <div className="step">
            <h3 id="step-5">Apply Boundary Conditions</h3>
            <p>Define cyclic loads and supports for your fatigue analysis.</p>
            <img src="https://picsum.photos/seed/fatigue/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Apply fixed supports and cyclic loads (e.g., force, pressure) in Static Structural</li>
              <li>In the Fatigue Tool, define the loading type (e.g., fully reversed, zero-based) and stress life parameters</li>
              <li>Specify the number of cycles or desired life</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Solve & Results</h2>
          <div className="step">
            <h3 id="step-6">Solve and Review Results</h3>
            <p>Run the fatigue analysis and examine the life, damage, and safety factor results.</p>
            <img src="https://picsum.photos/seed/fatigue/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Solve the Static Structural analysis first</li>
              <li>Then solve the Fatigue Tool</li>
              <li>Review contour plots for fatigue life, damage, and safety factor</li>
              <li>Identify critical locations prone to fatigue failure</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="expected-results">Expected Results</h3>
            <p>You should expect to see areas of low fatigue life where stress concentrations are high, indicating potential failure points under cyclic loading.</p>
          </div>
          <div className="step">
            <h3 id="next-steps">Next Steps</h3>
            <p>Now that you've completed your first fatigue analysis, try:</p>
            <ul>
              <li>Exploring different fatigue theories (e.g., Goodman, Soderberg)</li>
              <li>Analyzing the effect of surface finish and mean stress</li>
              <li>Performing a random vibration fatigue analysis</li>
              <li>Optimizing geometry to improve fatigue life</li>
            </ul>
            <Link to="/tutorial" className="btn">Back to Fatigue Tutorials</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fatigue;