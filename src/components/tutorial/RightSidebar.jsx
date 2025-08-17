import React from 'react';
import { useLocation } from 'react-router-dom';
import './RightSidebar.css';
import NavigationGuide from './NavigationGuide';

const RightSidebar = () => {
  const location = useLocation();

  const isTutorialCategoryPage = location.pathname.startsWith('/tutorial/home/');

  return (
    <aside className="right-sidebar">
      {isTutorialCategoryPage ? (
        <NavigationGuide />
      ) : (
        <>
          <h3>Resources</h3>
          <div className="resource-card">
            <h4>Download Files</h4>
            <p>Get the project files for the tutorials.</p>
            <a href="#" className="btn">Download</a>
          </div>
          <div className="resource-card">
            <h4>Forum</h4>
            <p>Ask questions and discuss with the community.</p>
            <a href="#" className="btn">Visit Forum</a>
          </div>
        </>
      )}
    </aside>
  );
};

export default RightSidebar;
