// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar'; // Import Navbar
import Footer from './component/footer'; // Import Footer
import RajagiriyaPage from './component/RajagiriyaPage'; // Import the RajagiriyaPage
import './App.css'; // Optional if you want to add custom styling

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
         {/* Navbar at the top */}
        
        <Routes>
          {/* Define the routes for the pages */}
          <Route path="/" element={<div>Weather App Main Page</div>} />
          <Route path="/rajagiriya" element={<RajagiriyaPage />} /> {/* Rajagiriya page route */}
        </Routes>
        
         {/* Footer at the bottom */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
