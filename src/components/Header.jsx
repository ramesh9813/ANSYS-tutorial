import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">ANSYS Tutorials</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tutorial">Tutorials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
