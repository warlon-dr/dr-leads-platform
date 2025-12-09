import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  bgColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  bgColor = 'bg-blue-600' 
}) => {
  return (
    <div className={`${bgColor} text-white p-6 rounded-lg shadow-md`}>
      <div className="text-sm font-medium opacity-90 mb-2">
        {label}
      </div>
      <div className="text-3xl font-bold">
        {value}
      </div>
    </div>
  );
};

export default MetricCard;