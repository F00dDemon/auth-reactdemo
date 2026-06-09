import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthCheck from './components/AuthCheck';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;