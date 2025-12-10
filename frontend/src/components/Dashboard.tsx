import React, { useState } from 'react';
import Navbar from './Navbar';
import DashboardContent from './DashboardContent';
import LeadsContent from './LeadsContent';
import CreditCheckContent from './CreditCheckContent';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'leads':
        return <LeadsContent />;
      case 'credit-check':
        return <CreditCheckContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;