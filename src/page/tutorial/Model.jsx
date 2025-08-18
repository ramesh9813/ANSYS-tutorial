import React from 'react';
import { Link } from 'react-router-dom';
import './Model.css';

const Model = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Model Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Model Analysis in ANSYS Workbench to determine the natural frequencies and mode shapes of a structure.</p>

      <div className="tutorial-page-grid">
        <div className="tutorial-card">
          <h2>Model Creation</h2>
          <div className="step">
            <h3 id="step-1">Create New Project</h3>
            <p>Open ANSYS Workbench and create a new Modal analysis system.</p>
            <img src="https://picsum.photos/seed/model/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Launch ANSYS Workbench</li>
              <li>From the Toolbox, drag "Modal" to the Project Schematic</li>
              <li>Right-click on "Engineering Data" and select "Edit"</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="step-2">Define Material Properties</h3>
            <p>Set up the material properties for your analysis, including density.</p>
            <img src="https://picsum.photos/seed/model/600/300" alt="Simulation step image" className="step-image" />
            <div className="code-block">
              Material: Structural Steel<br />
              Density: 7850 kg/m³<br />
              Young's Modulus: 2.0E+11 Pa<br />
              Poisson's Ratio: 0.3
            </div>
          </div>
          <div className="step">
            <h3 id="step-3">Import or Create Geometry</h3>
            <p>Create or import the geometry for your modal analysis.</p>
            <img src="https://picsum.photos/seed/model/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Geometry" and select "New DesignModeler Geometry"</li>
              <li>Create a simple beam or plate geometry</li>
              <li>Save the geometry and close DesignModeler</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Meshing</h2>
          <div className="step">
            <h3 id="step-4">Generate Mesh</h3>
            <p>Create a finite element mesh for accurate modal results.</p>
            <img src="https://picsum.photos/seed/model/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Model" and select "Edit"</li>
              <li>In Mechanical, right-click on "Mesh" and select "Generate Mesh"</li>
              <li>Adjust mesh sizing if needed for better accuracy</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Boundary Conditions</h2>
          <div className="step">
            <h3 id="step-5">Apply Boundary Conditions</h3>
            <p>Define supports for your modal analysis.</p>
            <img src="https://picsum.photos/seed/model/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Modal" and insert "Fixed Support"</li>
              <li>Select appropriate faces or edges for fixed support</li>
              <li>Ensure the model is adequately constrained to prevent rigid body motion</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Solve & Results</h2>
          <div className="step">
            <h3 id="step-6">Solve and Review Results</h3>
            <p>Run the modal analysis and examine the natural frequencies and mode shapes.</p>
            <img src="https://picsum.photos/seed/model/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Click "Solve" to run the analysis</li>
              <li>Insert "Mode Shape" to visualize the deformation for each mode</li>
              <li>Analyze the natural frequencies and corresponding mode shapes</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="expected-results">Expected Results</h3>
            <p>You should expect a series of natural frequencies and corresponding mode shapes, which are characteristic of the structure's dynamic behavior.</p>
          </div>
          <div className="step">
            <h3 id="next-steps">Next Steps</h3>
            <p>Now that you've completed your first modal analysis, try:</p>
            <ul>
              <li>Changing the material or geometry and observing changes in natural frequencies</li>
              <li>Applying different boundary conditions</li>
              <li>Performing a pre-stressed modal analysis</li>
              <li>Exploring damping effects</li>
            </ul>
            <Link to="/tutorial" className="btn">Back to Model Tutorials</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;