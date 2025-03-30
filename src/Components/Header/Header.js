import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: "/Aiinvestment", label: "AI Investment Advisor" },
  { path: "/SBP", label: "Smart Budget Planner" },
  { path: "/Cas", label: "Crypto & Stock Analysis" },
  { path: "/Lc", label: "Loan Calculator" }
];


const Header = () => {
  return (
    <header className="header-container">
      <nav>
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">W</span>
          <h2>WealthWisdom</h2>
        </Link>

        {/* Navigation Links */}

        <ul className="navlinks">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path} activeClassName="active">
            {item.label} 
            <span className="dropdown"><i className="ri-arrow-drop-down-line"></i></span>
          </NavLink>
        </li>
      ))}
      </ul>

        {/* Registration Buttons */}
        <div className="auth-buttons">
          <Link to="/Login" className="btn login-btn">Log In</Link>
          <Link to="/Signup" className="btn signup-btn">Logout</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
