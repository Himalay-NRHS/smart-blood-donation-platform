import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import OrganizationLogin from './pages/OrganizationLogin';
import OrganizationSignup from './pages/OrganizationSignup';
import UserDashboard from './pages/UserDashboard';
import HospitalDetail from './pages/HospitalDetail';
import HospitalDashboard from './pages/HospitalDashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={< HospitalDashboard  />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/org-login" element={<OrganizationLogin />} />
          <Route path="/org-signup" element={<OrganizationSignup />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/hospital/:id" element={<HospitalDetail />} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
