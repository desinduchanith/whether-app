// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import './navbar.css'; // Import navbar.css for styling

const Navbar = ({ city, handleCityChange, handleSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">Weuiup</h1>
        <div className="navbar-search">
          {/* Search Icon inside the input */}
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city..."
            className="navbar-input"
          />
          <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
        {/* Rajagiriya Button */}
        <Link to="/rajagiriya">
          <button className="rajagiriya-btn">Rajagiriya</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
