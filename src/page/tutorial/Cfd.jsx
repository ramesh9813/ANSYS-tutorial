import React from 'react';
import { Link } from 'react-router-dom';
import './Cfd.css';

const Cfd = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Fluid Dynamics (CFD) Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Fluid Dynamics (CFD) simulations in ANSYS Workbench to analyze fluid flow, heat transfer, and other fluid-related phenomena.</p>

      <div className="step">
        <h3 id="step-1">Step 1: Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Fluid Flow (Fluent) analysis system.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Fluid Flow (Fluent) system]</div>
        <ol>
          <li>Launch ANSYS Workbench</li>
          <li>From the Toolbox, drag "Fluid Flow (Fluent)" to the Project Schematic</li>
          <li>Right-click on "Geometry" and select "New DesignModeler Geometry"</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-2">Step 2: Define Fluid Properties</h3>
        <p>Set up the fluid properties for your analysis.</p>
        <div className="step-image">[Screenshot: Fluid properties definition in Fluent]</div>
        <div className="code-block">
          Fluid: Water Liquid<br />
          Density: 998.2 kg/m³<br />
          Viscosity: 0.001003 Pa.s
        </div>
      </div>

      <div className="step">
        <h3 id="step-3">Step 3: Import or Create Geometry</h3>
        <p>Create or import the geometry for your fluid flow analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with pipe geometry]</div>
        <ol>
          <li>Create a simple pipe: 100mm length, 10mm diameter</li>
          <li>Generate the surface and volume mesh</li>
          <li>Save the geometry and close DesignModeler</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-4">Step 4: Generate Mesh</h3>
        <p>Create a computational mesh for accurate CFD results.</p>
        <div className="step-image">[Screenshot: Meshed pipe with element display]</div>
        <ol>
          <li>Right-click on "Mesh" and select "Edit"</li>
          <li>In Meshing, generate a suitable mesh for fluid flow</li>
          <li>Adjust mesh sizing and quality if needed</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-5">Step 5: Set up Physics and Boundary Conditions</h3>
        <p>Define fluid flow physics and apply boundary conditions.</p>
        <div className="step-image">[Screenshot: Fluent setup with inlet/outlet boundary conditions]</div>
        <ol>
          <li>Right-click on "Setup" and select "Edit"</li>
          <li>Define material properties, models (e.g., K-epsilon), and boundary conditions (inlet velocity, outlet pressure)</li>
          <li>Initialize the solution</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-6">Step 6: Solve and Review Results</h3>
        <p>Run the CFD simulation and examine the results.</p>
        <div className="step-image">[Screenshot: Velocity contour plot in Fluent results]</div>
        <ol>
          <li>Run the calculation for a specified number of iterations</li>
          <li>Insert "Velocity Contours" to visualize flow patterns</li>
          <li>Insert "Pressure Contours" to see pressure distribution</li>
          <li>Analyze velocity, pressure, and other relevant fluid parameters</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>For the given pipe flow conditions, you should expect:</p>
        <ul>
          <li>Developed velocity profile at the outlet</li>
          <li>Pressure drop along the pipe length</li>
          <li>Smooth flow without significant recirculation (for laminar flow)</li>
        </ul>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Now that you've completed your first CFD analysis, try:</p>
        <ul>
          <li>Changing the fluid to air and comparing results</li>
          <li>Applying different inlet velocities</li>
          <li>Analyzing flow through a more complex geometry (e.g., a valve)</li>
          <li>Exploring turbulent flow models</li>
        </ul>
        <Link to="/tutorial" className="btn">Back to CFD Tutorials</Link>
      </div>
    </div>
  );
};

export default Cfd;