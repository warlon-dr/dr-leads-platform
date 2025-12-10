import React, { useState } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  dateOfBirth: string;
  creditScore: number;
  creditRating: string;
  balanceUnsecuredCreditCards: number;
  status: 'Qualified Lead' | 'Opportunity';
  tags: string[];
  submittedAt: string;
}

const LeadsContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);

  const leads: Lead[] = [
    {
      id: '1754469535435',
      name: 'Sandy Star',
      email: 'sandradewstar@gmail.com',
      phone: '(216) 855-5787',
      address: '4888 Woodruff Way',
      city: 'Fairview',
      state: 'TEXAS',
      dateOfBirth: 'Sep 16th 1954',
      creditScore: 719,
      creditRating: 'Good',
      balanceUnsecuredCreditCards: 14000,
      status: 'Opportunity',
      tags: ['Purchase', 'Opportunity', 'Qualified Lead', 'Registration'],
      submittedAt: 'August 6, 2025 at 04:38 PM'
    },
    {
      id: '1754336411146',
      name: 'Amy Lemmons',
      email: 'amylemm711@gmail.com',
      phone: '(469) 610-1942',
      address: '1235 Brittany Way',
      city: 'Seagoville',
      state: 'TEXAS',
      dateOfBirth: 'Oct 18th 1970',
      creditScore: 559,
      creditRating: 'Very Poor',
      balanceUnsecuredCreditCards: 10000,
      status: 'Qualified Lead',
      tags: ['Purchase', 'Opportunity', 'Qualified Lead', 'Registration'],
      submittedAt: 'August 5, 2025 at 03:40 AM'
    },
    {
      id: '1754310069764',
      name: 'Patricia Elliott',
      email: 'bubblese550@gmail.com',
      phone: '(936) 402-4819',
      address: 'P O Box 100',
      city: 'Daisetta',
      state: 'TEXAS',
      dateOfBirth: 'Feb 22nd 1968',
      creditScore: 559,
      creditRating: 'Very Poor',
      balanceUnsecuredCreditCards: 13000,
      status: 'Qualified Lead',
      tags: ['Purchase', 'Opportunity', 'Qualified Lead', 'Registration'],
      submittedAt: 'August 4, 2025 at 08:21 PM'
    },
    {
      id: '1754182812504',
      name: 'James Garcia',
      email: 'jamgar2421@gmail.com',
      phone: '(936) 240-8918',
      address: '2212 Tulane Drive',
      city: 'Lufkin',
      state: 'TEXAS',
      dateOfBirth: 'Apr 3rd 1979',
      creditScore: 739,
      creditRating: 'Good',
      balanceUnsecuredCreditCards: 49000,
      status: 'Opportunity',
      tags: ['Purchase', 'Opportunity', 'Qualified Lead', 'Registration'],
      submittedAt: 'August 3, 2025 at 09:00 AM'
    },
    {
      id: '1754179651457',
      name: 'Gary Fogle',
      email: 'garyfogle@yahoo.com',
      phone: '(832) 689-5049',
      address: '141 Burbank Street',
      city: 'Houston',
      state: 'TEXAS',
      dateOfBirth: 'Jun 25th 1954',
      creditScore: 659,
      creditRating: 'Fair',
      balanceUnsecuredCreditCards: 26000,
      status: 'Qualified Lead',
      tags: ['Purchase', 'Opportunity', 'Qualified Lead', 'Registration'],
      submittedAt: 'August 3, 2025 at 08:07 AM'
    },
    {
      id: '1754013690807',
      name: 'Brian Rowatt',
      email: 'flockfuster@gmail.com',
      phone: '(346) 370-3131',
      address: '12015 Lucky Meadow Drive',
      city: 'Tomball',
      state: 'TEXAS',
      dateOfBirth: 'Jul 21st 1958',
      creditScore: 679,
      creditRating: 'Good',
      balanceUnsecuredCreditCards: 43500,
      status: 'Opportunity',
      tags: ['Purchase', 'Opportunity', 'Qualified Lead', 'Registration'],
      submittedAt: 'August 1, 2025 at 10:01 AM'
    }
  ];

  const pageTags = [
    { emoji: '📞', label: 'Low contact rate', color: 'amber' },
    { emoji: '💰', label: 'High CPL', color: 'red' },
    { emoji: '📅', label: 'Low appointments', color: 'orange' },
    { emoji: '💸', label: 'Low debt amount', color: 'purple' },
    { emoji: '🔧', label: 'GHL issue', color: 'blue' },
    { emoji: '📱', label: 'SMS issue', color: 'indigo' },
    { emoji: '🌐', label: 'Website issue', color: 'pink' },
    { emoji: '📊', label: 'Meta issue', color: 'green' }
  ];

  const getCreditScoreColor = (score: number) => {
    if (score >= 740) return '#22C55E'; // Green
    if (score >= 670) return '#FCD34D'; // Yellow
    if (score >= 580) return '#F97316'; // Orange
    return '#EF4444'; // Red
  };

  const getCreditScoreRotation = (score: number) => {
    const angle = ((score - 300) / (850 - 300)) * 180 - 90;
    return Math.max(-90, Math.min(90, angle));
  };

  const getStatusColors = (status: string) => {
    switch (status) {
      case 'Opportunity':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Qualified Lead':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTagColors = (tag: string) => {
    const activeColor = 'text-blue-600 bg-blue-50 border-blue-200';
    const inactiveColor = 'text-gray-400 bg-gray-50 border-gray-200';
    
    if (tag === 'Qualified Lead' || tag === 'Opportunity') return activeColor;
    if (tag === 'Registration') return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (tag === 'Purchase' && Math.random() > 0.5) return 'text-purple-600 bg-purple-50 border-purple-200';
    return inactiveColor;
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="pt-8">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="max-w-[95%] mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-50 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Debt Redemption</h1>
                    <div className="text-gray-500 mt-1 space-y-1">
                      <p>Page ID: 744091252115863</p>
                      <div className="flex items-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <line x1="4" x2="20" y1="9" y2="9"></line>
                          <line x1="4" x2="20" y1="15" y2="15"></line>
                          <line x1="10" x2="8" y1="3" y2="21"></line>
                          <line x1="16" x2="14" y1="3" y2="21"></line>
                        </svg>
                        <span>Pixel IDs: 1279497173730195</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="font-medium">Page Notes</span>
                </button>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>Added 7/24/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[95%] mx-auto px-6 py-8">
          <div className="mb-6">
            {/* Page Tags Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-600">
                    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </svg>
                  <h3 className="text-sm font-semibold text-gray-700">Page Tags</h3>
                </div>
                <div className="text-xs text-gray-500">Click to tag it!</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {pageTags.map((tag, index) => (
                  <button
                    key={index}
                    className={`
                      inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 
                      text-xs font-medium border transition-all duration-200
                      hover:shadow-sm hover:opacity-90 transform hover:-translate-y-0.5
                      bg-${tag.color}-100 text-${tag.color}-800 border-${tag.color}-300
                    `}
                  >
                    <span className="mr-0.5">{tag.emoji}</span>
                    <span>{tag.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-30">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="relative flex-1">
                  <input
                    placeholder="Search leads by name, email, phone, address..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-3.5 h-5 w-5 text-gray-400">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <div className="flex-shrink-0">
                  <div className="relative">
                    <button 
                      onClick={() => setFilterVisible(!filterVisible)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                      <span>Filter Leads</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leads Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                {/* Lead Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-gray-500">Lead ID: {lead.id}</p>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            Qualified
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <button className={`flex items-center justify-between w-48 px-4 py-2 rounded-xl border transition-all ${getStatusColors(lead.status)}`}>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          {lead.status}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transform transition-transform">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Credit Info */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-600">
                          <line x1="12" x2="12" y1="2" y2="22"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span className="text-sm font-medium text-green-700">Balance Unsecured Credit Cards</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-green-800">${lead.balanceUnsecuredCreditCards.toLocaleString()}</span>
                        <span className="text-sm text-green-600">Threshold: &gt;= $10,000</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-600">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        <span className="text-sm font-medium text-green-700">Credit Score</span>
                      </div>
                      <div className="relative w-full max-w-md mx-auto p-6">
                        <div className="relative w-full">
                          <svg viewBox="0 0 200 150" className="w-full">
                            <path d="M 20 99.99999999999999 A 80 80 0 0 1 180 100" fill="none" stroke="#e5e7eb" strokeWidth="18" strokeLinecap="round"></path>
                            <g>
                              <path d="M 20 99.99999999999999 A 80 80 0 0 1 35.27864045000422 52.97717981660214" fill="none" stroke="#EF4444" strokeWidth="18" strokeLinecap="round"></path>
                            </g>
                            <g>
                              <path d="M 35.27864045000422 52.97717981660214 A 80 80 0 0 1 75.27864045000422 23.91547869638771" fill="none" stroke="#F97316" strokeWidth="18" strokeLinecap="round"></path>
                            </g>
                            <g>
                              <path d="M 75.27864045000422 23.91547869638771 A 80 80 0 0 1 124.7213595499958 23.915478696387723" fill="none" stroke="#FCD34D" strokeWidth="18" strokeLinecap="round"></path>
                            </g>
                            <g>
                              <path d="M 124.7213595499958 23.915478696387723 A 80 80 0 0 1 164.72135954999578 52.977179816602145" fill="none" stroke="#84CC16" strokeWidth="18" strokeLinecap="round"></path>
                            </g>
                            <g>
                              <path d="M 164.72135954999578 52.977179816602145 A 80 80 0 0 1 180 100" fill="none" stroke="#22C55E" strokeWidth="18" strokeLinecap="round"></path>
                            </g>
                            <g transform={`rotate(${getCreditScoreRotation(lead.creditScore)}, 100, 100)`}>
                              <line x1="100" y1="100" x2="100" y2="30" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" className="origin-bottom transition-transform duration-1000"></line>
                              <circle cx="100" cy="100" r="4" fill="#1F2937"></circle>
                            </g>
                            <text x="100" y="85" textAnchor="middle" className="text-3xl font-bold" fill={getCreditScoreColor(lead.creditScore)}>{lead.creditScore}</text>
                            <text x="100" y="110" textAnchor="middle" className="text-sm font-semibold fill-gray-700">{lead.creditRating}</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {lead.tags.map((tag, index) => (
                        <span key={index} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTagColors(tag)}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                            {tag === 'Purchase' || tag === 'Opportunity' ? (
                              <>
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </>
                            ) : (
                              <>
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </>
                            )}
                          </svg>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="p-6 border-b border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>{lead.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <a href={`mailto:${lead.email}`} className="text-blue-600 hover:text-blue-700 transition-colors">{lead.email}</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 mt-1">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div>
                        <p className="text-gray-900">{lead.address}</p>
                        <p className="text-gray-600">{lead.city}, {lead.state}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400 mt-1">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <div>
                        <p className="text-gray-900">Date of Birth</p>
                        <p className="text-gray-600">{lead.dateOfBirth}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span>{lead.submittedAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete Lead">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17"></line>
                          <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsContent;