import React from 'react';
import { Link } from 'react-router-dom';
import './Thermal.css';

const Thermal = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Thermal Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Thermal Analysis simulations in ANSYS Workbench to predict temperature distributions, heat transfer rates, and thermal stresses.</p>

      <div className="tutorial-grid">
        <div className="tutorial-card">
          <h2>Model Creation</h2>
          <div className="step">
            <h3 id="step-1">Step 1: Create New Project</h3>
            <p>Open ANSYS Workbench and create a new Steady-State Thermal analysis system.</p>
            <img src="https://picsum.photos/seed/thermal/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Launch ANSYS Workbench</li>
              <li>From the Toolbox, drag "Steady-State Thermal" to the Project Schematic</li>
              <li>Right-click on "Engineering Data" and select "Edit"</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="step-2">Step 2: Define Material Properties</h3>
            <p>Set up the thermal material properties for your analysis.</p>
            <img src="https://picsum.photos/seed/thermal/600/300" alt="Simulation step image" className="step-image" />
            <div className="code-block">
              Material: Aluminum Alloy<br />
              Thermal Conductivity: 160 W/(m·K)<br />
              Specific Heat: 875 J/(kg·K)<br />
              Density: 2700 kg/m³
            </div>
          </div>
          <div className="step">
            <h3 id="step-3">Step 3: Import or Create Geometry</h3>
            <p>Create or import the geometry for your thermal analysis.</p>
            <img src="https://picsum.photos/seed/thermal/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Geometry" and select "New DesignModeler Geometry"</li>
              <li>Create a simple heat sink geometry</li>
              <li>Save the geometry and close DesignModeler</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Meshing</h2>
          <div className="step">
            <h3 id="step-4">Step 4: Generate Mesh</h3>
            <p>Create a finite element mesh for accurate thermal results.</p>
            <img src="https://picsum.photos/seed/thermal/600/300" alt="Simulation step image" className="step-image" />
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
            <h3 id="step-5">Step 5: Apply Boundary Conditions</h3>
            <p>Define thermal loads and boundary conditions for your analysis.</p>
            <img src="https://picsum.photos/seed/thermal/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Right-click on "Steady-State Thermal" and insert "Heat Flux" on the base</li>
              <li>Apply a heat flux of 10000 W/m²</li>
              <li>Insert "Convection" on the fins and apply a convection coefficient</li>
            </ol>
          </div>
        </div>

        <div className="tutorial-card">
          <h2>Solve & Results</h2>
          <div className="step">
            <h3 id="step-6">Step 6: Solve and Review Results</h3>
            <p>Run the thermal analysis and examine the results.</p>
            <img src="https://picsum.photos/seed/thermal/600/300" alt="Simulation step image" className="step-image" />
            <ol>
              <li>Click "Solve" to run the analysis</li>
              <li>Insert "Temperature" to see temperature distribution</li>
              <li>Insert "Total Heat Flux" to see heat transfer paths</li>
              <li>Analyze the maximum temperature and heat transfer rates</li>
            </ol>
          </div>
          <div className="step">
            <h3 id="expected-results">Expected Results</h3>
            <p>For the given heat sink and thermal conditions, you should expect:</p>
            <ul>
              <li>Higher temperatures at the heat source (base)</li>
              <li>Temperature gradient along the fins</li>
              <li>Heat dissipation through convection from the fin surfaces</li>
            </ul>
          </div>
          <div className="step">
            <h3 id="next-steps">Next Steps</h3>
            <p>Now that you've completed your first thermal analysis, try:</p>
            <ul>
              <li>Changing the material to copper and comparing results</li>
              <li>Applying different heat loads or convection coefficients</li>
              <li>Analyzing a more complex thermal system (e.g., electronic component cooling)</li>
              <li>Exploring transient thermal effects</li>
            </ul>
            <Link to="/tutorial" className="btn">Back to Thermal Tutorials</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thermal;
