import React from 'react';

const LeadsContent: React.FC = () => {
  return (
    <div>
      <h1>Leads Management</h1>
      <p>This is where you'll manage all incoming leads from website forms.</p>
      
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '8px', 
        marginTop: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3>Coming Soon</h3>
        <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
          <li>Lead ingestion from website forms</li>
          <li>Lead status tracking</li>
          <li>Lead filtering and search</li>
          <li>Lead assignment and management</li>
        </ul>
      </div>
    </div>
  );
};

export default LeadsContent;