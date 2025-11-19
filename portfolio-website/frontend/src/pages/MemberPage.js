import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MemberPage.css';

function MemberPage() {
  const { id } = useParams();

  return (
    <div>
      <nav>
        <h1>Team Member Profile</h1>
      </nav>
      <div className="container">
        <Link to="/" className="back-button">← Back to Team</Link>
        
        <div className="profile-content">
          <h2>Team Member {id}</h2>
          <p>Profile content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
