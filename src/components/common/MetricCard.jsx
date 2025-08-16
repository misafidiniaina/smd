import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { COLORS } from '../../utils/constants';

const MetricCard = ({ title, value, change, icon: Icon, trend = 'up', subtitle, color = 'indigo' }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 p-6 hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl" />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">{title}</p>
            <div className="flex items-baseline space-x-2 mt-2">
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
              {subtitle && <span className="text-lg text-gray-400">{subtitle}</span>}
            </div>
          </div>
          <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${COLORS[color]} rounded-xl shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        {change && (
          <div className="flex items-center space-x-2">
            {trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-sm font-semibold ${trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
              {change}
            </span>
            <span className="text-gray-400 text-sm">vs last period</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;