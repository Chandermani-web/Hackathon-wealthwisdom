import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {  useClerk, useUser, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Home from '../Home/Home.js';

const navItems = [
  { path: "/Aiinvestment", label: "AI Investment Advisor" },
  { path: "/SBP", label: "Smart Budget Planner" },
  { path: "/Cas", label: "Crypto & Stock Analysis" },
  { path: "/Lc", label: "Loan Calculator" }
];


const Header = () => {
  
  const {openSignIn}= useClerk();
  const {user}= useUser();

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
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
        </div>
      </nav>
    </header>
  );
}

export default Header;
