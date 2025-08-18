import React from 'react';
import { Link } from 'react-router-dom';
import './ThermoStructural.css';

const ThermoStructural = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Thermo-Structural Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Thermo-Structural Analysis in ANSYS Workbench to analyze the effects of temperature changes on structural components.</p>

      <div className="tutorial-page-grid">
        <div className="tutorial-card">
          <h2>Model Creation</h2>
          <div className="step">
            <h3 id="step-1">Create New Project</h3>
            <p>Open ANSYS Workbench and create a new Steady-State Thermal analysis system, followed by a Static Structural system, and link them.</p>
            <img src="https://picsum.photos/seed/thermo-structural/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Launch ANSYS Workbench</li>
              <li>Drag "Steady-State Thermal" to the Project Schematic</li>
              <li>Drag "Static Structural" to the Project Schematic</li>
              <li>Link the "Solution" of Thermal to the "Setup" of Structural</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="step-2">Define Material Properties</h3>
            <p>Set up the material properties for your analysis, including thermal and structural properties.</p>
            <img src="https://picsum.photos/seed/thermo-structural/600/300" alt="Simulation step image" className="step-image" />
            <div className="code-block">
              Material: Steel (with thermal expansion coefficient)<br />
              Thermal Conductivity: 45 W/(m·K)<br />
              Coefficient of Thermal Expansion: 1.2E-5 /°C
            </div>
          </div>
          <div className="step">
            <h3 id="step-3">Import or Create Geometry</h3>
            <p>Create or import the geometry for your thermo-structural analysis.</p>
            <img src="https://picsum.photos/seed/thermo-structural/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Geometry" in Thermal and select "New DesignModeler Geometry"</li>
              <li>Create your geometry (e.g., a simple plate)</li>
              <li>Save and close DesignModeler</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Meshing</h2>
          <div className="step">
            <h3 id="step-4">Generate Mesh</h3>
            <p>Create a finite element mesh for accurate thermo-structural results.</p>
            <img src="https://picsum.photos/seed/thermo-structural/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Model" in Thermal and select "Edit"</li>
              <li>Generate mesh in Mechanical</li>
              <li>Ensure mesh quality is suitable for both thermal and structural analysis</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Boundary Conditions</h2>
          <div className="step">
            <h3 id="step-5">Apply Boundary Conditions</h3>
            <p>Define thermal and structural loads and constraints.</p>
            <img src="https://picsum.photos/seed/thermo-structural/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>In Thermal (Mechanical), apply temperature boundary conditions (e.g., fixed temperature, convection)</li>
              <li>In Structural (Mechanical), apply structural boundary conditions (e.g., fixed support, pressure)</li>
              <li>Ensure thermal results are transferred to structural analysis</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Solve & Results</h2>
          <div className="step">
            <h3 id="step-6">Solve and Review Results</h3>
            <p>Run the thermo-structural analysis and examine the temperature distribution and structural deformation.</p>
            <img src="https://picsum.photos/seed/thermo-structural/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Solve the Thermal analysis first</li>
              <li>Then solve the Structural analysis</li>
              <li>Review temperature contours, total deformation, and equivalent stress results</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="expected-results">Expected Results</h3>
            <p>You should expect to see how temperature changes induce stresses and deformations, with higher stresses in constrained areas and areas with large temperature gradients.</p>
          </div>
          <div className="step">
            <h3 id="next-steps">Next Steps</h3>
            <p>Now that you've completed your first thermo-structural analysis, try:</p>
            <ul>
              <li>Applying transient thermal loads</li>
              <li>Analyzing different material combinations</li>
              <li>Exploring thermal fatigue</li>
              <li>Optimizing geometry for thermal stress reduction</li>
            </ul>
            <Link to="/tutorial" className="btn">Back to Thermo-Structural Tutorials</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermoStructural;
