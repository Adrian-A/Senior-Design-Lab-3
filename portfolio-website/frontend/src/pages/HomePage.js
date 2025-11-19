import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <nav>
        <h1>Our Team Portfolio</h1>
      </nav>
      <div className="container">
        <h2>Team Members</h2>
        <ul>
          <li><Link to="/member/1">Team Member 1</Link></li>
          <li><Link to="/member/2">Team Member 2</Link></li>
          <li><Link to="/member/3">Team Member 3</Link></li>
          <li><Link to="/member/4">Team Member 4</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
