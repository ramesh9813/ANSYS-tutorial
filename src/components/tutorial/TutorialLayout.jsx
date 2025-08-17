import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import './TutorialLayout.css';

const TutorialLayout = () => {
  return (
    <div className="tutorial-layout">
      <LeftSidebar />
      <div className="tutorial-main-content">
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
};

export default TutorialLayout;
