// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDashboard from './ProfileDashboard';
import CreateGraphPage from './CreateGraphPage';
import GraphDetailsPage from './GraphDetailsPage';
import AccountSettings from './AccountSettings';
import PricingPage from './PricingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileDashboard />} />
        <Route path="/create-graph" element={<CreateGraphPage />} />
        <Route path="/graph-details" element={<GraphDetailsPage />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;


