import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  gradient: string;
  iconColor: string;
  textColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  gradient, 
  iconColor, 
  textColor 
}) => {
  return (
    <div className={`${gradient} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <Icon className={`w-8 h-8 ${iconColor} mb-4`} />
          <div className={`text-2xl font-bold ${textColor} mb-1`}>
            {value}
          </div>
        </div>
        <div className={`text-sm font-medium ${textColor} opacity-90 text-right`}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;