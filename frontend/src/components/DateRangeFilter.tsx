import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const DateRangeFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState('Last 7 Days');

  const quickRanges = ['Last 7 Days', 'Last 30 Days'];

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Date Range
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-gray-900">{selectedRange}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-96 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-4">
            <div className="flex space-x-2 mb-4">
              {quickRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setSelectedRange(range);
                    setIsOpen(false);
                  }}
                  className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200"
                >
                  {range}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Apply Range
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeFilter;