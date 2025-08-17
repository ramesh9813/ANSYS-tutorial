import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <h3>Tutorial Categories</h3>
      <nav>
        <ul>
          <li><NavLink to="/tutorial/home/structural">Structural Analysis</NavLink></li>
          <li><NavLink to="/tutorial/home/cfd">Fluid Dynamics (CFD)</NavLink></li>
          <li><NavLink to="/tutorial/home/electromagnetics">Electromagnetics</NavLink></li>
          <li><NavLink to="/tutorial/home/thermal">Thermal Analysis</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
