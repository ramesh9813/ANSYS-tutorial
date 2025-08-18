import React from 'react';
import { Link } from 'react-router-dom';
import './Coupled.css';

const Coupled = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Coupled Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Coupled Analysis in ANSYS Workbench to simulate phenomena where different physics interact with each other (e.g., fluid-structure interaction, thermal-electric coupling).</p>

      <div className="tutorial-grid">
        <div className="tutorial-card">
          <h2>Model Creation</h2>
          <div className="step">
            <h3 id="step-1">Create New Project</h3>
            <p>Open ANSYS Workbench and create a new Coupled analysis system (e.g., Fluid-Structure Interaction).</p>
            <img src="https://picsum.photos/seed/coupled/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Launch ANSYS Workbench</li>
              <li>Drag the required physics systems (e.g., Fluid Flow and Static Structural) to the Project Schematic</li>
              <li>Link the relevant cells to establish the coupling (e.g., Setup of Fluid to Setup of Structural)</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="step-2">Define Material Properties</h3>
            <p>Set up the material properties for all interacting physics.</p>
            <img src="https://picsum.photos/seed/coupled/600/300" alt="Simulation step image" className="step-image" />
            <div className="code-block">
              Fluid: Water Liquid<br />
              Solid: Structural Steel
            </div>
          </div>
          <div className="step">
            <h3 id="step-3">Import or Create Geometry</h3>
            <p>Create or import the geometry for your coupled analysis, ensuring interfaces are well-defined.</p>
            <img src="https://picsum.photos/seed/coupled/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Create a geometry that includes both fluid and solid domains (e.g., a pipe with a flexible wall)</li>
              <li>Define named selections for the fluid-solid interface</li>
              <li>Save and close DesignModeler</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Meshing</h2>
          <div className="step">
            <h3 id="step-4">Generate Mesh</h3>
            <p>Create a compatible mesh for all interacting domains.</p>
            <img src="https://picsum.photos/seed/coupled/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Generate mesh for both fluid and solid domains</li>
              <li>Ensure mesh conformity at the fluid-solid interface</li>
              <li>Refine mesh in critical regions (e.g., near the interface)</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Boundary Conditions</h2>
          <div className="step">
            <h3 id="step-5">Apply Boundary Conditions</h3>
            <p>Define loads and boundary conditions for all interacting physics, including coupling conditions.</p>
            <img src="https://picsum.photos/seed/coupled/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>In the fluid solver (e.g., Fluent), define fluid inlet/outlet conditions</li>
              <li>In the solid solver (e.g., Mechanical), define structural supports and loads</li>
              <li>Set up the FSI (Fluid-Structure Interaction) interface in System Coupling</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Solve & Results</h2>
          <div className="step">
            <h3 id="step-6">Solve and Review Results</h3>
            <p>Run the coupled analysis and examine the results from all interacting physics.</p>
            <img src="https://picsum.photos/seed/coupled/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Run the coupled simulation through System Coupling</li>
              <li>Review fluid flow results (velocity, pressure) and structural results (deformation, stress)</li>
              <li>Analyze the interaction between the physics</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="expected-results">Expected Results</h3>
            <p>You should observe the interaction between different physical phenomena, such as fluid pressure causing structural deformation, or structural deformation affecting fluid flow.</p>
          </div>
          <div className="step">
            <h3 id="next-steps">Next Steps</h3>
            <p>Now that you've completed your first coupled analysis, try:</p>
            <ul>
              <li>Exploring different coupling types (e.g., thermal-electric, electromagnetic-thermal)</li>
              <li>Analyzing more complex FSI problems (e.g., flutter)</li>
              <li>Investigating one-way vs. two-way coupling</li>
              <li>Optimizing the coupled system design</li>
            </ul>
            <Link to="/tutorial" className="btn">Back to Coupled Tutorials</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupled;