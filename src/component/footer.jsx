// src/components/Footer.js
import React from 'react';
import './footer.css'; // Import footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Weather App. All rights reserved.</p>
        <p>
          Created by <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">Your Name</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
