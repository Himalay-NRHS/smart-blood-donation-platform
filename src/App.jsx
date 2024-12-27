import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages//Navbar';
import Homepage from './pages/Homepage';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import OrganizationLogin from './pages/OrganizationLogin';
import OrganizationSignup from './pages/OrganizationSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/org-login" element={<OrganizationLogin />} />
          <Route path="/org-signup" element={<OrganizationSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
