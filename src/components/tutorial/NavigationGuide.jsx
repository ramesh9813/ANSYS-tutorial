import React from 'react';
import './NavigationGuide.css';

const NavigationGuide = () => {
  return (
    <div className="navigation-guide">
      <h3>Navigation Guide</h3>
      <ul>
        <li><a href="#step-1">Step 1: Create New Project</a></li>
        <li><a href="#step-2">Step 2: Define Material Properties</a></li>
        <li><a href="#step-3">Step 3: Import or Create Geometry</a></li>
        <li><a href="#step-4">Step 4: Generate Mesh</a></li>
        <li><a href="#step-5">Step 5: Apply Boundary Conditions</a></li>
        <li><a href="#step-6">Step 6: Solve and Review Results</a></li>
        <li><a href="#expected-results">Expected Results</a></li>
        <li><a href="#next-steps">Next Steps</a></li>
      </ul>
    </div>
  );
};

export default NavigationGuide;
