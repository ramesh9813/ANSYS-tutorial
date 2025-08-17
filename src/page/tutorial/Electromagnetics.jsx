import React from 'react';
import { Link } from 'react-router-dom';
import './Electromagnetics.css';

const Electromagnetics = () => {
  return (
    <div className="tutorial-content">
      <Link to="/tutorial" className="back-btn">← Back to Tutorials</Link>
      <h1>Electromagnetics Tutorial</h1>
      <p className="tutorial-intro">Learn how to perform Electromagnetics simulations in ANSYS Maxwell to analyze electric and magnetic fields, and their interactions.</p>

      <div className="step">
        <h3 id="step-1">Step 1: Create New Project</h3>
        <p>Open ANSYS Electronics Desktop and create a new Maxwell 3D project.</p>
        <div className="step-image">[Screenshot: ANSYS Electronics Desktop with Maxwell 3D project]</div>
        <ol>
          <li>Launch ANSYS Electronics Desktop</li>
          <li>From the menu, select Project -> Insert Maxwell 3D Design</li>
          <li>Set the solution type (e.g., Electrostatic, Magnetostatic)</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-2">Step 2: Define Material Properties</h3>
        <p>Set up the material properties for your electromagnetic analysis.</p>
        <div className="step-image">[Screenshot: Material properties definition in Maxwell]</div>
        <div className="code-block">
          Material: Copper<br />
          Conductivity: 5.8E+7 S/m<br />
          Relative Permeability: 1
        </div>
      </div>

      <div className="step">
        <h3 id="step-3">Step 3: Create Geometry</h3>
        <p>Create the geometric model for your electromagnetic device.</p>
        <div className="step-image">[Screenshot: Maxwell 3D with simple coil geometry]</div>
        <ol>
          <li>Draw a simple coil using primitives (cylinder, torus)</li>
          <li>Assign material properties to the objects</li>
          <li>Define regions for analysis (e.g., air box)</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-4">Step 4: Assign Excitations and Boundary Conditions</h3>
        <p>Define current, voltage, or magnetic sources and boundary conditions.</p>
        <div className="step-image">[Screenshot: Coil with current excitation and boundary conditions]</div>
        <ol>
          <li>Assign a current excitation to the coil</li>
          <li>Define boundary conditions (e.g., radiation boundary for open regions)</li>
          <li>Set up analysis (e.g., frequency sweep)</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-5">Step 5: Analyze and Solve</h3>
        <p>Run the electromagnetic simulation.</p>
        <div className="step-image">[Screenshot: Solution setup in Maxwell]</div>
        <ol>
          <li>Add a solution setup (e.g., On-Demand, Adaptive)</li>
          <li>Validate the design</li>
          <li>Analyze the project</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="step-6">Step 6: Review Results</h3>
        <p>Examine the electric and magnetic field distributions.</p>
        <div className="step-image">[Screenshot: Magnetic field plot around a coil]</div>
        <ol>
          <li>Create field plots (e.g., magnetic flux density, electric field)</li>
          <li>Generate reports (e.g., inductance, capacitance)</li>
          <li>Analyze the results for design optimization</li>
        </ol>
      </div>

      <div className="step">
        <h3 id="expected-results">Expected Results</h3>
        <p>For a simple coil, you should expect:</p>
        <ul>
          <li>Magnetic field lines concentrated within the coil</li>
          <li>Inductance value depending on coil geometry</li>
          <li>Minimal field leakage outside the defined region</li>
        </ul>
      </div>

      <div className="step">
        <h3 id="next-steps">Next Steps</h3>
        <p>Now that you've completed your first electromagnetics analysis, try:</p>
        <ul>
          <li>Changing the coil geometry and observing inductance changes</li>
          <li>Simulating a transformer or motor</li>
          <li>Exploring transient electromagnetic effects</li>
          <li>Analyzing eddy currents in conductive materials</li>
        </ul>
        <Link to="/tutorial" className="btn">Back to Electromagnetics Tutorials</Link>
      </div>
    </div>
  );
};

export default Electromagnetics;