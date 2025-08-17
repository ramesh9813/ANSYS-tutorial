import React from 'react';
import { useParams } from 'react-router-dom';
import './NavigationGuide.css';

const NavigationGuide = () => {
  const { category } = useParams();

  const tutorialSteps = {
    structural: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    cfd: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Fluid Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Set up Physics and Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    
    thermal: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    model: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    'thermo-structural': [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    coupled: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    fatigue: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    transient: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Material Properties' },
      { id: 'step-3', title: 'Import or Create Geometry' },
      { id: 'step-4', title: 'Generate Mesh' },
      { id: 'step-5', title: 'Apply Boundary Conditions' },
      { id: 'step-6', title: 'Solve and Review Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
    parametric: [
      { id: 'step-1', title: 'Import/Create Model' },
      { id: 'step-2', title: 'Define Parameters' },
      { id: 'step-3', title: 'Set up Design of Experiments (DOE)' },
      { id: 'step-4', title: 'Run Parametric Study' },
      { id: 'step-5', title: 'Analyze Results' },
      { id: 'expected-results', title: 'Expected Results' },
      { id: 'next-steps', title: 'Next Steps' },
    ],
  };

  const currentSteps = tutorialSteps[category] || [];

  return (
    <div className="navigation-guide">
      <h3>Navigation Guide</h3>
      <ul>
        {currentSteps.map((step) => (
          <li key={step.id}>
            <a href={`#${step.id}`}>{step.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationGuide;