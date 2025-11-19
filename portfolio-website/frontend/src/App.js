import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MemberPage from './pages/MemberPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/member/:id" element={<MemberPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
