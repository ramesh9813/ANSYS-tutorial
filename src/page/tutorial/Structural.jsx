import React from 'react';
import { Link } from 'react-router-dom';
import './Structural.css';

const Structural = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Static Structural Analysis Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform static structural analysis in ANSYS Workbench to calculate stresses, strains, and deformations under static loading conditions.</p>

      <div className="step">
        <h3 id="step-1">Step 1: Create New Project</h3>
        <p>Open ANSYS Workbench and create a new Static Structural analysis system.</p>
        <div className="step-image">[Screenshot: ANSYS Workbench Project Schematic with Static Structural system]</div>
        <ol>
          <li>Launch ANSYS Workbench</li>
          <li>From the Toolbox, drag "Static Structural" to the Project Schematic</li>
          <li>Right-click on "Engineering Data" and select "Edit"</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-2">Step 2: Define Material Properties</h3>
        <p>Set up the material properties for your analysis.</p>
        <div className="step-image">[Screenshot: Engineering Data interface with material properties]</div>
        <div className="code-block">
          Material: Structural Steel<br />
          Density: 7850 kg/m³<br />
          Young's Modulus: 2.0E+11 Pa<br />
          Poisson's Ratio: 0.3
        </div>
      </div>

      <div className="step">
        <h3 id="step-3">Step 3: Import or Create Geometry</h3>
        <p>Create or import the geometry for your analysis.</p>
        <div className="step-image">[Screenshot: ANSYS DesignModeler with simple beam geometry]</div>
        <ol>
          <li>Right-click on "Geometry" and select "New DesignModeler Geometry"</li>
          <li>Create a simple beam: 100mm x 10mm x 5mm</li>
          <li>Save the geometry and close DesignModeler</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-4">Step 4: Generate Mesh</h3>
        <p>Create a finite element mesh for accurate results.</p>
        <div className="step-image">[Screenshot: Meshed beam with element display]</div>
        <ol>
          <li>Right-click on "Model" and select "Edit"</li>
          <li>In Mechanical, right-click on "Mesh" and select "Generate Mesh"</li>
          <li>Adjust mesh sizing if needed for better accuracy</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-5">Step 5: Apply Boundary Conditions</h3>
        <p>Define loads and constraints for your analysis.</p>
        <div className="step-image">[Screenshot: Beam with fixed support and applied force]</div>
        <ol>
          <li>Right-click on "Static Structural" and insert "Fixed Support"</li>
          <li>Select one end of the beam and apply the fixed support</li>
          <li>Insert "Force" and apply 1000 N downward at the free end</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-6">Step 6: Solve and Review Results</h3>
        <p>Run the analysis and examine the results.</p>
        <div className="step-image">[Screenshot: Stress contour plot showing maximum stress]</div>
        <ol>
          <li>Click "Solve" to run the analysis</li>
          <li>Insert "Total Deformation" to see deflection</li>
          <li>Insert "Equivalent Stress" to see stress distribution</li>
          <li>Analyze the maximum stress and deflection values</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>For the given beam and loading conditions, you should expect:</p>
        <ul>
          <li>Maximum deflection: ~0.48 mm at the free end</li>
          <li>Maximum stress: ~120 MPa at the fixed support</li>
          <li>Stress concentration at the fixed end</li>
        </ul>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Now that you've completed your first static structural analysis, try:</p>
        <ul>
          <li>Changing the material to aluminum and comparing results</li>
          <li>Applying different load magnitudes and directions</li>
          <li>Analyzing a more complex geometry</li>
          <li>Exploring nonlinear material behavior</li>
        </ul>
        <Link to="/tutorial" className="btn">Back to Structural Tutorials</Link>
      </div>
    </div>
  );
};

export default Structural;
