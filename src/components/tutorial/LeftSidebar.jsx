import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <h3>Tutorial Categories</h3>
      <nav>
        <ul>
          <li><NavLink to="/tutorial/home/structural">Structural</NavLink></li>
          <li><NavLink to="/tutorial/home/cfd">CFD</NavLink></li>
          
          <li><NavLink to="/tutorial/home/thermal">Thermal</NavLink></li>
          <li><NavLink to="/tutorial/home/model">Model</NavLink></li>
          <li><NavLink to="/tutorial/home/thermo-structural">Thermo-Structural</NavLink></li>
          <li><NavLink to="/tutorial/home/coupled">Coupled</NavLink></li>
          <li><NavLink to="/tutorial/home/fatigue">Fatigue</NavLink></li>
          <li><NavLink to="/tutorial/home/transient">Transient</NavLink></li>
          <li><NavLink to="/tutorial/home/parametric">Parametric</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
