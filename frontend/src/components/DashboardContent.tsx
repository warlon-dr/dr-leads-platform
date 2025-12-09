import React from 'react';
import { Lock, Eye, Users, UserCheck, Target, DollarSign, PieChart, TrendingUp, BarChart3, Percent, ShoppingCart } from 'lucide-react';
import DateRangeFilter from './DateRangeFilter';
import MetricCard from './MetricCard';
import StatsCard from './StatsCard';

const DashboardContent: React.FC = () => {
  const statsData = [
    // Cards arranged for 5x3 large screens, with softer backgrounds and darker text
    { icon: Eye, label: 'Page Views', value: '0', gradient: 'bg-gradient-to-br from-blue-50 to-blue-100', iconColor: 'text-blue-600', textColor: 'text-blue-800' },
    { icon: Users, label: 'Leads', value: '0', gradient: 'bg-gradient-to-br from-purple-50 to-purple-100', iconColor: 'text-purple-600', textColor: 'text-purple-800' },
    { icon: UserCheck, label: 'Qualified Leads', value: '0', gradient: 'bg-gradient-to-br from-green-50 to-green-100', iconColor: 'text-green-600', textColor: 'text-green-800' },
    { icon: Target, label: 'Opportunities', value: '0', gradient: 'bg-gradient-to-br from-orange-50 to-orange-100', iconColor: 'text-orange-600', textColor: 'text-orange-800' },
    { icon: ShoppingCart, label: 'Purchases', value: '0', gradient: 'bg-gradient-to-br from-red-50 to-red-100', iconColor: 'text-red-600', textColor: 'text-red-800' },
    { icon: DollarSign, label: 'Cost Per Click', value: '$0.00', gradient: 'bg-gradient-to-br from-blue-100 to-blue-200', iconColor: 'text-blue-700', textColor: 'text-blue-900' },
    { icon: DollarSign, label: 'Cost Per Lead', value: '$0.00', gradient: 'bg-gradient-to-br from-purple-100 to-purple-200', iconColor: 'text-purple-700', textColor: 'text-purple-900' },
    { icon: DollarSign, label: 'Cost Per Qualified Lead', value: '$0.00', gradient: 'bg-gradient-to-br from-green-100 to-green-200', iconColor: 'text-green-700', textColor: 'text-green-900' },
    { icon: DollarSign, label: 'Cost Per Opportunity', value: '$0.00', gradient: 'bg-gradient-to-br from-orange-100 to-orange-200', iconColor: 'text-orange-700', textColor: 'text-orange-900' },
    { icon: DollarSign, label: 'Cost Per Purchase', value: '$0.00', gradient: 'bg-gradient-to-br from-red-100 to-red-200', iconColor: 'text-red-700', textColor: 'text-red-900' },
    { icon: PieChart, label: 'Click Through Rate', value: '0.0%', gradient: 'bg-gradient-to-br from-blue-100 to-blue-200', iconColor: 'text-blue-700', textColor: 'text-blue-900' },
    { icon: TrendingUp, label: 'Page Conversion Rate', value: '0.0%', gradient: 'bg-gradient-to-br from-purple-100 to-purple-200', iconColor: 'text-purple-700', textColor: 'text-purple-900' },
    { icon: BarChart3, label: 'Qualifier Conversion Rate', value: '0.0%', gradient: 'bg-gradient-to-br from-green-100 to-green-200', iconColor: 'text-green-700', textColor: 'text-green-900' },
    { icon: Percent, label: 'Opportunity Conversion Rate', value: '0.0%', gradient: 'bg-gradient-to-br from-orange-100 to-orange-200', iconColor: 'text-orange-700', textColor: 'text-orange-900' },
    { icon: TrendingUp, label: 'Purchase Conversion Rate', value: '0.0%', gradient: 'bg-gradient-to-br from-red-100 to-red-200', iconColor: 'text-red-700', textColor: 'text-red-900' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Top Controls */}
      <div className="flex max-sm:flex-col max-sm:items-start items-end gap-6 mb-8">
        {/* Facebook Page Component */}
        <div className="flex-1 max-sm:w-full min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Facebook Page
          </label>
          <div className="flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed">
            <Lock className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-gray-500">Debt Redemption</span>
          </div>
        </div>
        
        {/* Date Range Filter */}
        <div className="flex-1 max-sm:w-full min-w-0">
          <DateRangeFilter />
        </div>
        
        {/* Campaign Overview Metric */}
        <div className="flex-1 max-sm:w-full min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Overview
          </label>
          <MetricCard label="Total Ad Spend" value="$ 0.00" />
        </div>
      </div>

      {/* Stats Grid - Large Screens (5x3) */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={`lg-${index}`}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            gradient={stat.gradient}
            iconColor={stat.iconColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Stats Grid - Medium Screens (3x5) - Reordered for column grouping */}
      <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6">
        {/* Column 1 - Blue Group */}
        <StatsCard {...statsData[0]} />  {/* Page Views */}
        <StatsCard {...statsData[5]} />  {/* Cost Per Click */}
        <StatsCard {...statsData[10]} /> {/* Click Through Rate */}
        <StatsCard {...statsData[1]} />  {/* Leads */}
        <StatsCard {...statsData[6]} />  {/* Cost Per Lead */}
        
        {/* Column 2 - Purple Group */}
        <StatsCard {...statsData[11]} /> {/* Page Conversion Rate */}
        <StatsCard {...statsData[2]} />  {/* Qualified Leads */}
        <StatsCard {...statsData[7]} />  {/* Cost Per Qualified Lead */}
        <StatsCard {...statsData[12]} /> {/* Qualifier Conversion Rate */}
        <StatsCard {...statsData[3]} />  {/* Opportunities */}
        
        {/* Column 3 - Green Group */}
        <StatsCard {...statsData[8]} />  {/* Cost Per Opportunity */}
        <StatsCard {...statsData[13]} /> {/* Opportunity Conversion Rate */}
        <StatsCard {...statsData[4]} />  {/* Purchases */}
        <StatsCard {...statsData[9]} />  {/* Cost Per Purchase */}
        <StatsCard {...statsData[14]} /> {/* Purchase Conversion Rate */}
      </div>

      {/* Stats Grid - Small Screens (1 column) */}
      <div className="grid md:hidden grid-cols-1 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={`sm-${index}`}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            gradient={stat.gradient}
            iconColor={stat.iconColor}
            textColor={stat.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;