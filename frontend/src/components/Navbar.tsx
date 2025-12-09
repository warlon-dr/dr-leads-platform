import React from 'react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  // const { logout } = useAuth();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'leads', label: 'Leads' },
    { id: 'credit-check', label: 'Credit Check' }
  ];

  return (
    <nav className="bg-slate-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <a href="#" className="text-xl font-bold text-white hover:text-gray-200">
        DR Leads
      </a>
      
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === item.id 
                  ? 'bg-white/20 text-white' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                onTabChange(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      
      {/* <button 
        onClick={logout} 
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        Logout
      </button> */}
       <span 
        // onClick={logout} 
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
      >
        Logout
      </span>
    </nav>
  );
};

export default Navbar;