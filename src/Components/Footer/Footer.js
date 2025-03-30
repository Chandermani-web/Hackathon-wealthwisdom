import React from "react";
import "./Footer.css";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      
      <div className="footer-container-top">
        <div className="fc1">
          <Link to="/" className="logo">
            <span className="logo-icon">W</span>
            <h2>WealthWisdom</h2>
          </Link>
          <p>AI-powered financial intelligence for smarter wealth cuilding decisions.</p>
          <div className="social-media">
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-github-fill"></i>
          </div>
        </div>
        <div className="fc2">
          <h1>Features</h1>
          <h3>AI Investment Advisor</h3>
          <h3>Smart Budget Planner</h3>
          <h3>Risk Assessment</h3>
          <h3>Crypto & Stock Analysis</h3>
          <h3>Loan Calculator</h3>
        </div>
        <div className="fc3">
          <h1>Company</h1>
          <h3>About Us</h3>
          <h3>Careers</h3>
          <h3>Blog</h3>
          <h3>Press</h3>
          <h3>Partners</h3>
        </div>
        <div className="fc4">
          <h1>Stay Updated</h1>
          <p>Subscribe to out newsletter for the latest financial insights</p>
          <div>
            <input type="search" placeholder="Your Email Address" />
            <i className="ri-arrow-right-line" ></i>
          </div>
        </div>
      </div>
      
      <div className="footer-container-bottom">
        <div>
          <p>&copy;2025 WealthWisdom. All rights reserved.</p>
        </div>
        <div>
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Cookie Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
