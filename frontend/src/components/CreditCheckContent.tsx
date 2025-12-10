import React, { useState } from 'react';

const CreditCheckContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Basic Credit');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    debtAmount: '',
    ghlSource: ''
  });
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const [currentAttribute, setCurrentAttribute] = useState('');

  const tabs = [
    'Basic Credit',
    'GHL Integration',
    'Full Response',
    'Custom Attribute'
  ];

  const attributeOptions = [
    { value: 'open_account_avg_age_months', label: 'OPEN ACCOUNT AVG AGE MONTHS' },
    { value: 'number_of_accounts', label: 'NUMBER OF ACCOUNTS' },
    { value: 'accounts_opened_last_24_months', label: 'ACCOUNTS OPENED LAST 24 MONTHS' },
    { value: 'accounts_active_last_6_months', label: 'ACCOUNTS ACTIVE LAST 6 MONTHS' },
    { value: 'auto_loans_open_last_6_months', label: 'AUTO LOANS OPEN LAST 6 MONTHS' },
    { value: 'closed_credit_cards', label: 'CLOSED CREDIT CARDS' },
    { value: 'closed_installment_accounts', label: 'CLOSED INSTALLMENT ACCOUNTS' },
    { value: 'credit_cards_last_6_months', label: 'CREDIT CARDS LAST 6 MONTHS' },
    { value: 'installment_accounts_last_12_months', label: 'INSTALLMENT ACCOUNTS LAST 12 MONTHS' },
    { value: 'installment_accounts_stayed_current_last_24_months', label: 'INSTALLMENT ACCOUNTS STAYED CURRENT LAST 24 MONTHS' },
    { value: 'loans_credit_cards_applied_last_24_months', label: 'LOANS CREDIT CARDS APPLIED LAST 24 MONTHS' },
    { value: 'mortgage_accounts', label: 'MORTGAGE ACCOUNTS' },
    { value: 'mortgages_open_last_6_months', label: 'MORTGAGES OPEN LAST 6 MONTHS' },
    { value: 'non_federal_student_loans', label: 'NON FEDERAL STUDENT LOANS' },
    { value: 'open_credit_cards', label: 'OPEN CREDIT CARDS' },
    { value: 'open_credit_cards_active_last_12_months', label: 'OPEN CREDIT CARDS ACTIVE LAST 12 MONTHS' },
    { value: 'open_installment_accounts', label: 'OPEN INSTALLMENT ACCOUNTS' },
    { value: 'open_mortgages_accounts', label: 'OPEN MORTGAGES ACCOUNTS' },
    { value: 'open_revolving_accounts', label: 'OPEN REVOLVING ACCOUNTS' },
    { value: 'open_revolving_accounts_active_last_12_months', label: 'OPEN REVOLVING ACCOUNTS ACTIVE LAST 12 MONTHS' },
    { value: 'student_loans_last_12_months', label: 'STUDENT LOANS LAST 12 MONTHS' },
    { value: 'worst_rating_all_accounts_last_12_months', label: 'WORST RATING ALL ACCOUNTS LAST 12 MONTHS' },
    { value: 'current_delinquent_accounts_balance', label: 'CURRENT DELINQUENT ACCOUNTS BALANCE' },
    { value: 'balance_open_active_accounts_last_12_months', label: 'BALANCE OPEN ACTIVE ACCOUNTS LAST 12 MONTHS' },
    { value: 'balance_open_auto_loans_last_12_months', label: 'BALANCE OPEN AUTO LOANS LAST 12 MONTHS' },
    { value: 'balance_open_credit_accounts', label: 'BALANCE OPEN CREDIT ACCOUNTS' },
    { value: 'balance_open_mortgages', label: 'BALANCE OPEN MORTGAGES' },
    { value: 'balance_open_retail_accounts', label: 'BALANCE OPEN RETAIL ACCOUNTS' },
    { value: 'balance_open_revolving_accounts', label: 'BALANCE OPEN REVOLVING ACCOUNTS' },
    { value: 'balance_unsecured_accounts', label: 'BALANCE UNSECURED ACCOUNTS' },
    { value: 'balance_unsecured_credit_cards', label: 'BALANCE UNSECURED CREDIT CARDS' },
    { value: 'monthly_payments_all', label: 'MONTHLY PAYMENTS ALL' },
    { value: 'monthly_payments_auto', label: 'MONTHLY PAYMENTS AUTO' },
    { value: 'monthly_payments_mortgage', label: 'MONTHLY PAYMENTS MORTGAGE' },
    { value: '%_of_available_revolving_accounts', label: '% OF AVAILABLE REVOLVING ACCOUNTS' },
    { value: 'credit_limit_open_accounts', label: 'CREDIT LIMIT OPEN ACCOUNTS' },
    { value: 'credit_limit_open_credit_cards', label: 'CREDIT LIMIT OPEN CREDIT CARDS' },
    { value: 'credit_limit_open_installment_accounts', label: 'CREDIT LIMIT OPEN INSTALLMENT ACCOUNTS' },
    { value: 'credit_limit_open_retail_accounts', label: 'CREDIT LIMIT OPEN RETAIL ACCOUNTS' },
    { value: 'credit_limit_open_revolving_accounts', label: 'CREDIT LIMIT OPEN REVOLVING ACCOUNTS' },
    { value: 'credit_utilization_installment_accounts', label: 'CREDIT UTILIZATION INSTALLMENT ACCOUNTS' },
    { value: 'credit_utilization_open_accounts', label: 'CREDIT UTILIZATION OPEN ACCOUNTS' },
    { value: 'credit_utilization_revolving_accounts', label: 'CREDIT UTILIZATION REVOLVING ACCOUNTS' },
    { value: 'highest_credit_limit_open_credit_card', label: 'HIGHEST CREDIT LIMIT OPEN CREDIT CARD' },
    { value: '30_days_late_reports_mortgages_last_6_months', label: '30 DAYS LATE REPORTS MORTGAGES LAST 6 MONTHS' },
    { value: '30_days_late_reports_nonMedical', label: '30 DAYS LATE REPORTS NONMEDICAL' },
    { value: '30_days_late_reports_last_12_months', label: '30 DAYS LATE REPORTS LAST 12 MONTHS' },
    { value: 'accounts_currently_late_last_30_days', label: 'ACCOUNTS CURRENTLY LATE LAST 30 DAYS' },
    { value: 'accounts_ever_delinquent', label: 'ACCOUNTS EVER DELINQUENT' },
    { value: 'accounts_with_major_derogatory_marks', label: 'ACCOUNTS WITH MAJOR DEROGATORY MARKS' },
    { value: 'delinquent_accounts', label: 'DELINQUENT ACCOUNTS' },
    { value: 'current_delinquent_installment_accounts', label: 'CURRENT DELINQUENT INSTALLMENT ACCOUNTS' },
    { value: 'current_delinquent_revolving_accounts', label: 'CURRENT DELINQUENT REVOLVING ACCOUNTS' },
    { value: 'delinquencies_last_60_days', label: 'DELINQUENCIES LAST 60 DAYS' },
    { value: 'months_since_mortgage_delinquency', label: 'MONTHS SINCE MORTGAGE DELINQUENCY' },
    { value: 'months_since_revolving_delinquency', label: 'MONTHS SINCE REVOLVING DELINQUENCY' },
    { value: '%_of_accounts_ever_delinquent', label: '% OF ACCOUNTS EVER DELINQUENT' },
    { value: 'hard_inquiries_last_24_months', label: 'HARD INQUIRIES LAST 24 MONTHS' },
    { value: 'inquiries_last_6_months', label: 'INQUIRIES LAST 6 MONTHS' },
    { value: 'public_records', label: 'PUBLIC RECORDS' },
    { value: 'collection_balance', label: 'COLLECTION BALANCE' },
    { value: 'judgments_usd', label: 'JUDGMENTS USD' },
    { value: 'tax_liens_usd', label: 'TAX LIENS USD' },
    { value: 'number_of_bankruptcies', label: 'NUMBER OF BANKRUPTCIES' },
    { value: 'number_of_chargeOffs_last_12_months', label: 'NUMBER OF CHARGEOFFS LAST 12 MONTHS' },
    { value: 'number_of_foreclosures', label: 'NUMBER OF FORECLOSURES' },
    { value: 'months_since_foreclosure', label: 'MONTHS SINCE FORECLOSURE' },
    { value: 'months_since_nonMedical_third_party_collections', label: 'MONTHS SINCE NONMEDICAL THIRD PARTY COLLECTIONS' },
    { value: 'months_since_public_record', label: 'MONTHS SINCE PUBLIC RECORD' },
    { value: 'months_since_last_repossession', label: 'MONTHS SINCE LAST REPOSSESSION' },
    { value: 'repossessed_auto_loans', label: 'REPOSSESSED AUTO LOANS' },
    { value: 'repossessions', label: 'REPOSSESSIONS' },
    { value: 'tax_liens', label: 'TAX LIENS' },
    { value: 'third_party_collection_accounts', label: 'THIRD PARTY COLLECTION ACCOUNTS' },
    { value: 'student_loan_balance', label: 'STUDENT LOAN BALANCE' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddAttribute = () => {
    if (currentAttribute && !selectedAttributes.includes(currentAttribute)) {
      setSelectedAttributes(prev => [...prev, currentAttribute]);
      setCurrentAttribute('');
    }
  };

  const handleRemoveAttribute = (attributeToRemove: string) => {
    setSelectedAttributes(prev => prev.filter(attr => attr !== attributeToRemove));
  };

  const getAttributeLabel = (value: string) => {
    return attributeOptions.find(attr => attr.value === value)?.label || value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Credit check form submitted:', { 
      ...formData, 
      selectedAttributes: activeTab === 'Custom Attribute' ? selectedAttributes : [] 
    });
    // TODO: Implement credit check API call
  };

  const renderBasicForm = (includeExtraFields = false) => {
    return (
      <>
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter last name"
              required
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Birthdate
            </label>
            <input
              type="date"
              value={formData.birthdate}
              onChange={(e) => handleInputChange('birthdate', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent [color-scheme:dark]"
              required
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Phone Number (e.g. 2085983642)
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="2085983642"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Street Address
            </label>
            <input
              type="text"
              value={formData.streetAddress}
              onChange={(e) => handleInputChange('streetAddress', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter street address"
              required
            />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter city"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              State
            </label>
            <select
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            >
              <option value="" className="bg-gray-800">Select state</option>
              <option value="AL" className="bg-gray-800">Alabama</option>
              <option value="AK" className="bg-gray-800">Alaska</option>
              <option value="AZ" className="bg-gray-800">Arizona</option>
              <option value="CA" className="bg-gray-800">California</option>
              <option value="FL" className="bg-gray-800">Florida</option>
              <option value="NY" className="bg-gray-800">New York</option>
              <option value="TX" className="bg-gray-800">Texas</option>
              {/* Add more states as needed */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              ZIP
            </label>
            <input
              type="text"
              value={formData.zip}
              onChange={(e) => handleInputChange('zip', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="12345"
              pattern="[0-9]{5}"
              required
            />
          </div>
        </div>

        {/* GHL Integration Extra Fields */}
        {includeExtraFields && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Debt Amount
              </label>
              <input
                type="number"
                value={formData.debtAmount}
                onChange={(e) => handleInputChange('debtAmount', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter debt amount"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                GHL Source
              </label>
              <input
                type="text"
                value={formData.ghlSource}
                onChange={(e) => handleInputChange('ghlSource', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter GHL source"
                required
              />
            </div>
          </div>
        )}
      </>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Basic Credit':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderBasicForm()}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Run Credit Check
            </button>
          </form>
        );

      case 'GHL Integration':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderBasicForm(true)}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Run Credit Check with GHL
            </button>
          </form>
        );

      case 'Full Response':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderBasicForm()}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Get Full Credit Response
            </button>
          </form>
        );

      case 'Custom Attribute':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderBasicForm()}
            
            {/* Custom Attributes Section */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Custom Attributes
              </label>
              <div className="flex gap-2">
                <select
                  value={currentAttribute}
                  onChange={(e) => setCurrentAttribute(e.target.value)}
                  className="flex-1 bg-gray-700/70 backdrop-blur rounded-lg px-4 py-3 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select an attribute</option>
                  {attributeOptions.map((attr) => (
                    <option key={attr.value} value={attr.value} className="bg-gray-800">
                      {attr.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleAddAttribute}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Selected Attributes */}
            {selectedAttributes.length > 0 && (
              <div className="space-y-2">
                {selectedAttributes.map((attr) => (
                  <div
                    key={attr}
                    className="flex items-center justify-between w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
                  >
                    <span className="text-white text-sm">{getAttributeLabel(attr)}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveAttribute(attr)}
                      className="text-red-400 hover:text-red-300 font-bold text-lg"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              Run Credit Check with Attributes
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 h-full">
      <div className="p-8 flex items-center justify-center ">
        <div className="max-w-4xl w-full">
          {/* Glass Morphism Container */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/20 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {renderTabContent()}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCheckContent;